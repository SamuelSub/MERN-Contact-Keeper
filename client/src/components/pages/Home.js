/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm';
import FilterContacts from '../contacts/FilterContacts';
import AuthContext from '../../context/auth/authContext';

const Home = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <FilterContacts />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
