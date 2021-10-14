import React, { useContext, useState, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';

const ContactForm = () => {

  const ContactContext = useContext(contactContext);

  useEffect(() => {
    if(ContactContext.current !== null) {
      setContact(ContactContext.current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      })
    }
  }, [ContactContext, ContactContext.current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  })

  const { name, email, phone, type } = contact;

  const onChange = e => {
    // e.target.name returns the name='something' from the event parameter
    setContact({...contact, [e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();
    if(ContactContext.current === null) {
      ContactContext.addContact(contact);
    } else {
      ContactContext.updateContact(contact);
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    })
  }

  const clearAll = () => {
    ContactContext.clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{ContactContext.current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" name='name' placeholder='Name' value={name} onChange={onChange}/>
      <input type="text" name='email' placeholder='Email' value={email} onChange={onChange}/>
      <input type="text" name='phone' placeholder='Phone' value={phone} onChange={onChange}/>
      <h5>Contact Type</h5>
      <input type="radio" name="type" value='personal' checked={type === 'personal'} onChange={onChange} /> Personal {' '}
      <input type="radio" name="type" value='professional' checked={type === 'professional'} onChange={onChange}/> Professional {' '}
      <div>
        <input type="submit" value={ContactContext.current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block'></input>
      </div>
      {ContactContext.current && (
        <div>
          <button onClick={clearAll} className="btn btn-light btn-block">Clear</button>
        </div>
      )}
    </form>
  )
}

export default ContactForm