import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from '../Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    // Initial state for testing
    setContacts([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
  }, []);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already a contact!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: 950,
        height: '100vh',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        gap: 100,
        fontSize: 30,
        color: '#010101',
        margin: 20,
        padding: 20,
        backgroundColor: 'lightgray',
        border: '10px solid darkgray',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div
        style={{
          marginTop: 18,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
        </div>
        <div>
          <h2 style={{ marginTop: '25px' }}>Contact list</h2>
          <ContactList
            contacts={filteredContacts}
            handleDeleteContact={handleDeleteContact}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
