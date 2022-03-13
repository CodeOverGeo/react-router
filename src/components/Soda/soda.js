import React from 'react';
import { Link } from 'react-router-dom';
import soda from './soda.jpg';
import './soda.css';

const Soda = () => {
  return (
    <div>
      <h1>Soda</h1>
      <img src={soda} alt="soda" />
      <h3>
        <Link to="/">go back</Link>
      </h3>
    </div>
  );
};

export default Soda;
