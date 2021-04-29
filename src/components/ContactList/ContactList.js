import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, handleRemove }) => {
  return (
    <div>
      <ul>
        {contacts?.map((contact, index) => (
          <ContactItem
            key={index}
            // name={contact.name}
            // phone={contact.phone}
            contact={contact}
            handleDelete={() => handleRemove(index)}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
