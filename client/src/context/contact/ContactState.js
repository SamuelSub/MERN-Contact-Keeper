/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import { v4 } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Arsen Arseni',
        email: 'arsen@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Mandi Mandi',
        email: 'mandi@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Gazi Gazi',
        email: 'gazi@gmail.com',
        phone: '333-333-3333',
        type: 'personal'
      },
    ],
    current: null,
    filtered: null
  }
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  const addContact = (contact) => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact});
  }
  
  // Delete Contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id});
  }

  // Set Current Contact

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  }

  // Clear Current Contact

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  }

  // Update 
  
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  }

  // Filter Contacts

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  }

  // Clear Filter

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  }

  return (
    <contactContext.Provider value={{
      contacts: state.contacts,
      current: state.current,
      filtered: state.filtered,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact,
      filterContacts,
      clearFilter
    }}>
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState;