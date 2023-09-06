import React, { useState } from 'react';
import './Login.css';

const Login = ({ setIsLoggedIn, setToken, onLogin }) => {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginNameChange = (e) => {
    setLoginName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupUsernameChange = (e) => {
    setSignupUsername(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginName,
          password,
        }),
      });
      const result = await response.json();
      console.log((result));
      setMessage(result.message);
      setIsLoggedIn(true);
      setToken(result.token);
      localStorage.setItem('token', result.token);
      if (!response.ok) {
        throw result;
      }
      setLoginName('');
      setPassword('');
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    }
  };

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginName,
          password,
        }),
      });
      const result = await response.json();
      setMessage(result.message);
      setToken(result.token);
      setIsLoggedIn(true);
      onLogin(result.loginName, result.token);
      if (!response.ok) {
        throw result;
      }
      setLoginName('');
      setPassword('');
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signup();
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className='login-container'>
      <h1>Login or Sign up!</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='loginName'>Email or Username:</label>
          <input
            type='text'
            id='loginName'
            value={loginName}
            onChange={handleLoginNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type='submit' className='button'>
          Login
        </button>
      </form>
      <p className='message'>{message}</p>
      <div>
        {!showSignup ? (
          <p>
            <button onClick={toggleSignup} className='noaccount-button'>
              Don't have an account? Sign up here!
            </button>
          </p>
        ) : (
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <div>
                <label htmlFor='signup-username'>Username:</label>
                <input
                  type='text'
                  id='signup-username'
                  value={signupUsername}
                  onChange={handleSignupUsernameChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='signup-email'>Email:</label>
                <input
                  type='email'
                  id='signup-email'
                  value={signupEmail}
                  onChange={handleSignupEmailChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='signup-password'>Password:</label>
                <input
                  type='password'
                  id='signup-password'
                  value={signupPassword}
                  onChange={handleSignupPasswordChange}
                  required
                />
              </div>
              <button type='submit'>Sign Up</button>
            </form>
            <p>{signupMessage}</p>
          </div>
        )}
      </div>
    </div>
  );

};

export default Login;
