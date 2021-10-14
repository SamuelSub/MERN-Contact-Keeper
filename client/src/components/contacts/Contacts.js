import { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts, filtered } = useContext(contactContext);
  return (
    <Fragment>
      {filtered ? 
        filtered.map(contact => <ContactItem key={contact.id} contact={contact}/>)
      : contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
    </Fragment>
  )
}

export default Contacts
