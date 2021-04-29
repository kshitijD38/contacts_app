import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    localStorage.setItem("dataStore", JSON.stringify(contacts));

    const dataStore = JSON.parse(localStorage.getItem("dataStore"));

    if (dataStore !== null) {
      setContacts(dataStore);
    }
  }, [contacts.length]);

  const handleRemove = (index) => {
    const newList = contacts?.filter((item, idx) => idx !== index);
    setContacts(newList);
  };

  const searchInput = (e) => {
    const filteredArray = contacts.filter(
      (user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.phone.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setContacts(filteredArray);
  };

  const ascContacts = () => {
    const sortData = [...contacts];
    sortData.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    setContacts(sortData);
  };

  const dscContacts = () => {
    const sortData = [...contacts];
    sortData.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1;
      }
    });

    setContacts(sortData);
  };

  // console.log("contacts>>>>>", contacts);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url("/image/cool-background.png")`,
      }}
    >
      <AddContact contacts={contacts} setContacts={setContacts} />
      <h1 className="title">contact app</h1>
      <Filter
        ascContacts={ascContacts}
        dscContacts={dscContacts}
        searchInput={searchInput}
      />
      <ContactList contacts={contacts} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
