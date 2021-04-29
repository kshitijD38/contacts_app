import React, { createRef, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

const ContactItem = ({ contact, handleDelete, index }) => {
  const [edit, setEdit] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const myRef = createRef();

  const editName = (e) => {
    setEditedName(e.target.value);
  };
  const editPhone = (e) => {
    setEditedPhone(e.target.value);
  };
  const editSubmited = () => {
    contact.name = editedName;
    contact.phone = editedPhone;
    setEdit(false);
  };

  const onDelete = () => {
    myRef.current.className = "active";
    setTimeout(() => {
      handleDelete(index);
    }, 200);
  };

  return (
    <div>
      {!edit ? (
        <li ref={myRef} className="listItem">
          <div>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
          </div>
          <div className="list__button">
            <IconButton
              title="Edit"
              style={{ color: "teal" }}
              onClick={() => setEdit(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              title="Delete"
              style={{ color: "teal" }}
              onClick={onDelete}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </li>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 0 }}>
            <input
              name="name"
              id="name"
              type="text"
              onChange={editName}
              style={{ height: 30 }}
              required
            />
            <input
              name="phone"
              id="phone"
              type="tel"
              onChange={editPhone}
              style={{ height: 30 }}
              required
            />
          </div>
          <IconButton
            type="submit"
            title="Save"
            onClick={editSubmited}
            style={{ color: "teal", width: 50 }}
          >
            <SaveIcon />
          </IconButton>
          <IconButton
            title="Cancel"
            style={{ color: "teal", width: 50, marginRight: 30 }}
            onClick={() => setEdit(false)}
          >
            <CancelIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
