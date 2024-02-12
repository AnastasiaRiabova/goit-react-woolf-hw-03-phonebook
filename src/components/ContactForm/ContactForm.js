import React, { Component } from 'react';
import classes from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const result = this.props.addContact(this.state);
    if (!result) {
      return;
    }
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={classes.container}>
        <input
          className={classes.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="[A-Za-zА-Яа-яЁёҐґІіЇїЄє \s' \-]*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          className={classes.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+[0-9 \s \-]*"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
