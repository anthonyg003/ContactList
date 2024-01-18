import { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleContact();
  }, []);
  return (
    <>
      <h1>Selected Contact</h1>
      {console.log(contact)}
      <p>{contact.name}</p>
    </>
  );
}

export default SelectedContact;
