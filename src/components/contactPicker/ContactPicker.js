import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {

  return (
    <select onChange={onChange}>
      <option>Pick a contact</option>
      { contacts && contacts.length > 0 && contacts.map( (value, index) => <option key={index}>{value.name}</option>)}
    </select>
  );
};
