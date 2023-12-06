import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'; // Your CSS file
import Navigation from './Navigation'; // Import the Navigation component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(); // Get the authentication instance
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully!');
      setLoggedIn(true); // Set loggedIn state to true after successful login
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login errors (display error message, etc.)
    }
  };

  if (loggedIn) {
    return <Navigation />; // Display Navigation component after successful login
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
