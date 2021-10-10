import { Fragment, useContext } from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts } = useContext(contactContext);
  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}/>
        ))}
    </Fragment>
  )
}

export default Contacts
