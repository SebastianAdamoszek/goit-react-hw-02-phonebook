import React from 'react';
import css from './ContactList.module.css'

const ContactList = ({ contacts, handleDeleteContact }) => (
  
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <p className={css.list__style}></p>
        {contact.name}: {contact.number}
        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
