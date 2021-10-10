import React, { useState } from 'react'

const ContactForm = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  })

  const { name, email, phone, type } = contact;

  const onChange = e => {
    // e.target.name returns the name='something' from the event parameter
    setContact({...contact, [e.target.name]: e.target.value});
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <h2>Add Contact</h2>
      <input type="text" name='name' placeholder='Name' value={name} onChange={onChange}/>
      <input type="text" name='email' placeholder='Email' value={email} onChange={onChange}/>
      <input type="text" name='phone' placeholder='Phone' value={phone} onChange={onChange}/>
      <h5>Contact Type</h5>
      <input type="radio" name="type" value='personal' checked={type === 'personal'}  /> Personal {' '}
      <input type="radio" name="type" value='professional' checked={type === 'professional'}  /> Professional {' '}
      <div>
        <input type="submit" value="Add Contact" className='btn btn-primary btn-block'></input>
      </div>
    </form>
  )
}

export default ContactForm
