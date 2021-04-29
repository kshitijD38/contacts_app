for (let i = 0; i < contacts.length; i++) {
  window.localStorage.setItem(
    i,
    JSON.stringify([{ name: contacts[i].name, phn: contacts[i].phn }])
  );
}

const user = [];
for (let j = 0; j < contacts.length; j++) {
  user.push(JSON.parse(window.localStorage.getItem(j))[0]);
}

const deleteContact = () => {};

// console.log(contacts);
console.log("contacts ===> ", contacts);
console.log("users ===> ", user);
const [name, setName] = useState("");
const [phoneNo, setPhoneNo] = useState("");
const [contacts, setContacts] = useState([]);

const addNewContact = (e) => {
  e.preventDefault();
  let contact = {
    name: name,
    phn: phoneNo,
  };
  setContacts([...contacts, contact]);
};

const deleteContact = () => {};

return (
  <div className="app">
    <div className="home">
      <form onSubmit={addNewContact}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="tel" onChange={(e) => setPhoneNo(e.target.value)} />
        <input type="submit" />
      </form>
      <div>
        {contacts?.map((u) => (
          <div>
            {u.name} {u.phn}
            <button onClick={deleteContact}>delete</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
