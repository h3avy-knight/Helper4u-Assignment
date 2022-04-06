import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAcount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      console.log(email, password);
    }
  };
  return (
    <div className='login-container'>
      <h3 className='login-title'>Create a new Account</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label>Email ID / Phone Number</label>
          <input
            type='text'
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='login-button'>
          Submit
        </button>
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          <Link to='/'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default CreateAcount;
