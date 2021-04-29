import React from "react";

const Filter = ({ ascContacts, dscContacts, searchInput }) => {
  return (
    <div className="filters">
      <button onClick={ascContacts}>Asc</button>
      <button onClick={dscContacts}>Dsc</button>
      <input
        style={{ border: "none", borderRadius: 10 }}
        type="text"
        placeholder=" search"
        onChange={searchInput}
      />
    </div>
  );
};

export default Filter;
