import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
// const [contacts, setContacts] = useState(0);
// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(0);
  // console.log("Contacts: ", contacts);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        // console.log("response ->", response);
        const result = await response.json();
        setContacts(() => result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Names</td>
          <td>Email</td>
          <td>Phones</td>
        </tr>
        {contacts &&
          contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        {console.log(contacts)}
      </tbody>
    </table>
  );
}

export default ContactList;
