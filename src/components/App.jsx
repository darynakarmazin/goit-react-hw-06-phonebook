import React from 'react';

import { Wrapper, Header } from './App.styled';
import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { addedContact, deletedContact } from 'redux/contactsSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const deleteContact = contactId => {
    dispatch(deletedContact(contactId));
  };

  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addedContact(name, number));
  };

  const changeFilter = event => dispatch(setFilter(event.currentTarget.value));

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtredContacts = getFiltredContacts();

  return (
    <Wrapper>
      <Header>Phonebook</Header>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filtredContacts={filtredContacts}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
}
