import { useReducer } from 'react';
import uuid from 'uuid';
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
    ]
  }
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  
  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <contactContext.Provider value={{
      contacts: state.contacts
    }}>
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState;