import React from 'react';
import './Register.css'; // Import the external CSS file

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-heading">Register</h2>
        <form className="register-form">
          <input
            type="email"
            className="register-input"
            placeholder="Email"
          />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
          />
          <button
            className="register-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
