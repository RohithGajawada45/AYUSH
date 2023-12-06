import React from 'react';
import Navigation from './Navigation'; // Import your Navigation component here

const Home = () => {
  return (
    <div>
      <Navigation /> {/* Render the Navigation component */}
      <h1>Welcome to the Home Page</h1>
      {/* Other content of your Home page */}
    </div>
  );
};

export default Home;
