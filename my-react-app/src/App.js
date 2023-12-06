import React from 'react';
import Login from './components/Login'; // Replace with your Login component file location
import Register from './components/Register'; // Replace with your Register component file location
import Content from './components/Content';

const App = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '100vh' }}>
      <Content />
      <Login />
      <Register />
    </div>
  );
};

export default App;
