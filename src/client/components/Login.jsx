import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupMessage, setSignupMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupEmailChange =(e) => {
    setSignupEmail(e.target.value);
  }

  const handleSignupPasswordChange =(e) => {
    setSignupPassword(e.target.value);
  };

  const login = async() => {
    try {
        const response = await fetch('http://localhost:3000/Login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                email,
                password
            })
        });
        const result = await response.json();
        console.log(response)
        setMessage(result.message);
        if(!response.ok) {
          throw(result)
        }
        setEmail('');
        setPassword('');
    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
  }

  const signup = async () => {
    try {
      const response = await fetch('http://localhost:3000/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword
        })
      });
      const result = await response.json();
      setSignupMessage(result.message);
      if (!response.ok) {
        throw result;
      }
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


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
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
        <button type='submit'>Login</button>
      </form>
      <p>{message}</p>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
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
    </div>
  );
};

export default Login;
