import { Fragment, useContext, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import authContext from '../../context/auth/authContext'

const Contacts = () => {
  const { contacts, filtered, getContacts, clearContacts } = useContext(contactContext);
  const { isAuthenticated } = useContext(authContext);

  useEffect(() => {
    if(isAuthenticated) {
      getContacts();
    } else {
      clearContacts();
    }
  }, []);

  return (
    <Fragment>
      {contacts && (
        filtered ? 
          filtered.map(contact => <ContactItem key={contact._id} contact={contact}/>)
        : contacts.map(contact => <ContactItem key={contact._id} contact={contact}/>)
      )}
    </Fragment>
  )
}

export default Contacts
