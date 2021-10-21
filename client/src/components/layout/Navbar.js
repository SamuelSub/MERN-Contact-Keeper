import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title }) => {

  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const onLogout = () => {
    contactContext.clearContacts();
    authContext.logout();
  }

  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        {authContext.isAuthenticated ? (
          <Fragment>
            <h4><Link to='/'>Hello { authContext.user && authContext.user.name }</Link></h4>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/login' onClick={onLogout}>Logout</Link></li>
          </Fragment>
        ) : (
          <Fragment>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

// declaring what type the props should be
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

// declaring default props
Navbar.defaultProps = {
  title: 'Contact Keeper | Keep Your Contacts'
}

export default Navbar
