import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>React Boilerplate</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/about">about app</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;