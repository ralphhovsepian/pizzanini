import React from 'react';
import './Header.css';
import pizza from '../Styling/pizza.png';
export default function Header() {
  return (
    <div className='Header'>
      <div>
        <h1>Taste your favourite Nini Pizza!</h1>
        <button>Order now</button>
      </div>
      <img src={pizza} alt='pizza vector' />
    </div>
  );
}
