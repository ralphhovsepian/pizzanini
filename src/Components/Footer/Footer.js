import React from 'react';
import './Footer.css';
import logo from '../Styling/footerlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faGoogleWallet } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div className='Footer' id='contact'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <h3>Opening hours</h3>
        <p>Mon-Fri: 10AM till 12 AM</p>
        <p>Mon-Fri: 11AM till 1 AM</p>

        <div className='payment'>
          <h3>Payment Methods</h3>
          <p className="logos">
            <span><FontAwesomeIcon icon={faPaypal} size='3x'/></span>
            <span><FontAwesomeIcon icon={faCreditCard} size='3x'/></span>
            <span><FontAwesomeIcon icon={faGoogleWallet} size='3x'/></span>
          </p>
        </div>
      </div>
    </div>
  );
}
