import React from 'react';
import { Link } from 'react-router-dom';
import chips from './chips.jpg';
import './chips.css';

const Chips = () => {
  return (
    <div>
      <h1>Chips</h1>
      <img src={chips} alt="chips" />
      <h3>
        <Link to="/">go back</Link>
      </h3>
    </div>
  );
};

export default Chips;
