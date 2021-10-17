/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if(authContext.isAuthenticated) {
      props.history.push('/');
    }
    if(authContext.error === 'Invalid Credentials') {
      alertContext.setAlert(authContext.error, 'danger')
      authContext.clearErrors();
    }
  }, [authContext.isAuthenticated, authContext.error]);

  const onSubmit = e => {
    e.preventDefault();
    if(email === '' || password === '') {
      alertContext.setAlert('Please fill all the input fields', 'danger');
    } else {
      authContext.login(user);
    }
  }

  return (
    <div className='form-container'>
      <h1>Account <span className='text-primary'>Login</span></h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor="email">Email Address</label>
          <input type="email" name='email' value={email} required onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' value={password} required onChange={onChange} />
        </div>
        <input type="submit" value="Login" className='btn btn-primary btn-block' />
      </form>
    </div>
  )
}

export default Login
