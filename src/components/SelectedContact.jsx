import React from "react";
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
        setContact(() => result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleContact();
  }, []);
  return (
    <>
      <div>
        <h1>Selected Contact</h1>
        <p>{contact?.name}</p>
        <p>{contact?.username}</p>
        <p>{contact?.phone}</p>
        <p>{contact?.website}</p>
        <p>{contact?.address.city}</p>
        {console.log(contact)}
      </div>
    </>
  );
}

export default SelectedContact;
