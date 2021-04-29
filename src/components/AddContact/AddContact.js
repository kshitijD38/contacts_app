import React, { useState } from "react";

const AddContact = ({ contacts, setContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  let repeat = false;

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newContact = { name: name, phone: phone };
    // console.log(contacts.includes(newContact));

    for (let i = 0; i < contacts.length; i++) {
      if (
        contacts[i].name === newContact.name ||
        contacts[i].phone === newContact.phone
      ) {
        repeat = true;
        alert("already exists");
      }
    }

    if (!repeat) {
      setContacts([...contacts, newContact]);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input name="name" id="name" type="text" onChange={handleName} required />
      <input
        name="phone"
        id="phone"
        type="number"
        onChange={handlePhone}
        required
      />
      <button className="button" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
