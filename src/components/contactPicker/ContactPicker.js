import React from "react";

export const ContactPicker = ({
  contacts = [],
  onChange,
  value,
  name,
  contact,
}) => {
  return (
    <select name={name} value={value} onChange={onChange} required>
      <option value={contact}>Select contact</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
