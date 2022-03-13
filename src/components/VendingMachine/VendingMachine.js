import React from 'react';
import { Link } from 'react-router-dom';
import './vendingmachine.css';
import vendingMachineImg from './vendingmachine.jpg';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Hello, I am a vending machine. What would you like to eat?</h1>
      <img src={vendingMachineImg} alt="Vending Machine" />
      <div className="Links">
        <ul>
          <li>
            <Link to="/soda">soda</Link>
          </li>
          <li>
            <Link to="/chips">chips</Link>
          </li>
          <li>
            <Link to="/cookies">cookies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendingMachine;
