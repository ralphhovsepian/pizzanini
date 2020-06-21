import React from 'react';
import './OrderInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faCheck,
  faCar,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
export default function OrderInfo() {
  return (
    <div className='Info'>
      <h1>
        How does it <span>work?</span>
      </h1>
      <div className='how'>
        <div className='leftSteps'>
          <div className='steps'>
            <div>
              <h2>Order your pizza</h2>
              <i>From Italian all the way to Hawaiian!</i>
            </div>
            <span>
              <FontAwesomeIcon icon={faLaptop} size='3x' />
            </span>
          </div>

          <div className='steps'>
            <div>
              <h2>Confirm your order</h2>
              <i>We'll call to confirm!</i>
            </div>
            <span>
              <FontAwesomeIcon icon={faCheck} size='3x' />
            </span>
          </div>
        </div>

        <div className='rightSteps'>
          <div className='steps'>
            <div>
              <h2>Delivery</h2>
              <i>Estimated time: 30-45 mins</i>
            </div>
            <span>
              <FontAwesomeIcon icon={faCar} size='3x' />
            </span>
          </div>
          <div className='steps'>
            <div>
              <h2>Enjoy your meal!</h2>
              <i>Or as the French say: Bon Appetit!</i>
            </div>
            <span>
              <FontAwesomeIcon icon={faSmile} size='3x' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
