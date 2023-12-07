import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Content from './components/Content';
import './App.css'; // Import your external CSS file

const App = () => {
  return (
    <div className="app-container">
      <Content />
      <Login />
      <Register />
    </div>
  );
};

export default App;
