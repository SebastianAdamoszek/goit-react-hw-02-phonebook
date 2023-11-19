import React from 'react';
import css from './ContactItem.module.css'

const ContactItem = ({ contact, handleDeleteContact }) => (
  <li key={contact.id}>
        <p className={css.list__style}></p>
        {contact.name}: {contact.number}
        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
      </li>
);

export default ContactItem;
