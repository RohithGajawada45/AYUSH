import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Home from './Home'; // Import Redirect
import './Login.css'; // Your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully!');
      setLoggedIn(true); // Set loggedIn to true upon successful login
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login errors (display error message, etc.)
    }
  };

  if (loggedIn) {
    // Redirect to Home page upon successful login
    return <Home/>;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
