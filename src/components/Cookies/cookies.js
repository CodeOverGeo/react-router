import React from 'react';
import { Link } from 'react-router-dom';
import cookies from './cookies.jpg';
import './cookies.css';

const Cookies = () => {
  return (
    <div>
      <h1>Cookies</h1>
      <img src={cookies} alt="cookies" />
      <h3>
        <Link to="/">go back</Link>
      </h3>
    </div>
  );
};

export default Cookies;
