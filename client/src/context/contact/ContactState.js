/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import { v4 } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import axios from 'axios';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  SET_ALERT,
  REMOVE_ALERT,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null
  }
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  const addContact = async contact => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/contacts', contact, config);
  
      dispatch({ type: ADD_CONTACT, payload: res.data });

    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.data.msg })
    }

  }

  // Get Contacts

  const getContacts = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.get('/api/contacts', config);

      dispatch({ type: GET_CONTACTS, payload: res.data });

    } catch (error) {
      console.log(error.msg)
    }

  }

  // Clear Contacts

  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  }
  
  // Delete Contact

  const deleteContact = async (id) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.delete(`/api/contacts/${id}`, config);

      dispatch({ type: DELETE_CONTACT, payload: id });

    } catch (error) {
      console.log(error.msg)
    }

    
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
  
  const updateContact = async contact => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);

      dispatch({ type: UPDATE_CONTACT, payload: res.data });

    } catch (error) {
      console.log(error.msg)
    }

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
      error: state.error,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact,
      filterContacts,
      clearFilter,
      getContacts,
      clearContacts
    }}>
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState;