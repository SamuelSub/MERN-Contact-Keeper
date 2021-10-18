/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  CONTACT_ERROR,
  REMOVE_ALERT,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }   
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => (
          contact.id === action.payload.id ? action.payload : contact
        ))
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        })
      }
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null
      }
    case CLEAR_FILTER:
      return {
        
      }  
    case SET_ALERT:
      return {
        
      }    
    case REMOVE_ALERT:
      return {
        
      }       
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}