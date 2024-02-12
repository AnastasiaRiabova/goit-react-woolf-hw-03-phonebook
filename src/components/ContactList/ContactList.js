import React from 'react';
import classes from './ContactList.module.css';

export class ContactList extends React.Component {
  render() {
    return (
      <ul className={classes.container}>
        {this.props.contacts.map(contact => (
          <li className={classes.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={classes.button}
              onClick={() => this.props.deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
