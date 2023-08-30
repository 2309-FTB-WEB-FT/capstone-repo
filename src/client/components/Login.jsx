import React, { useState } from 'react';
import './Login.css';

const Login = ({setToken}) => {
  // For login
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  // For signup
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupMessage, setSignupMessage] = useState('')
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

  const handleSignupEmailChange =(e) => {
    setSignupEmail(e.target.value);
  }

  const handleSignupPasswordChange =(e) => {
    setSignupPassword(e.target.value);
  };

  const login = async() => {
    try {
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
              loginName, 
              password
            })
        });
        const result = await response.json();
        console.log(JSON.stringify(result))
        setMessage(result.message);
        setToken(result.token);
        if(!response.ok) {
          throw(result)
        }
        setLoginName('');
        setPassword('');
    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
  }

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: signupUsername,
          email: signupEmail,
          password: signupPassword
        })
      });
      const result = await response.json();
      console.log(`signup response: ${JSON.stringify(result)}`);
      setSignupMessage(result.message);
      setToken(result.token);
      if (!response.ok) {
        throw result;
      }
      setSignupUsername('');
      setSignupEmail('');
      setSignupPassword('');
    }catch(err) {
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
      <h2 className='login-section'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='loginName'>Email or Username:</label>
          <input
            type='text'
            id='loginName'
            value={loginName}
            onChange={handleLoginNameChange}
            required
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div >
        <button type='submit' className='submit-button'>Login</button>
      </form>
      <p className="message">{message}</p>
      <div className='signup-link'>
        {!showSignup ? (
          <p>
            Dont have an account?{''}
            <button onClick={toggleSignup}>Sign up here!</button>
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
          <button type='submit' className='submit-button'>Sign Up</button>
        </form>
        <p>{signupMessage}</p>
      </div>
      )}
     </div> 
    </div>
  );
};

export default Login;
