import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
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
