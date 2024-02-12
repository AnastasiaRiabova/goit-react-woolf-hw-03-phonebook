import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import classes from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };
  render() {
    const { contacts, filter } = this.state;
    const { addContact, handleFilterChange, deleteContact } = this;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className={classes.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={handleFilterChange} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </>
        ) : (
          'No contacts added'
        )}
      </div>
    );
  }
}

export default App;
