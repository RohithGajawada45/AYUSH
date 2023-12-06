import React from 'react';

const Register = () => {
  return (
    <div style={{ position: 'fixed', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{
        maxWidth: '400px',
        width: '90%',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        textAlign: 'center',
        marginLeft: '600px',
        marginTop: '70px',
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#333' }}>
          Register
        </h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="email"
            style={{
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '12px',
              outline: 'none',
              fontSize: '16px',
            }}
            placeholder="Email"
          />
          <input
            type="password"
            style={{
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '12px',
              outline: 'none',
              fontSize: '16px',
            }}
            placeholder="Password"
          />
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '12px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              fontSize: '18px',
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
