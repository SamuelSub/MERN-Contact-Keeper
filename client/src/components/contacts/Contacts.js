import { Fragment, useContext, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts, filtered, getContacts } = useContext(contactContext);

  useEffect(() => {
    getContacts();
  }, [contacts]);

  return (
    <Fragment>
      {filtered ? 
        filtered.map(contact => <ContactItem key={contact._id} contact={contact}/>)
      : contacts.map(contact => <ContactItem key={contact._id} contact={contact}/>)}
    </Fragment>
  )
}

export default Contacts
