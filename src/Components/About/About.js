import React from 'react';
import './About.css';
import {
  faUsers,
  faGlobe,
  faCar,
  faMale,
  faFemale,
  faLaptop,
  faSmile,
  faHandPeace,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function About() {
  return (
    <div className='About'>
      <div className='intro'>
        <div className='left'>
          <h1>A little bit about Pizza Nini</h1>
        </div>
      </div>
      <div className='facts'>
        <div className='fact'>
          <span>
            <FontAwesomeIcon icon={faUsers} size='2x' />
          </span>
          <h3>450</h3>
          <p>Employees</p>
        </div>

        <div className='fact'>
          <span>
            <FontAwesomeIcon icon={faGlobe} size='2x' />
          </span>
          <h3>10</h3>
          <p>Locations Worldwide</p>
        </div>

        <div className='fact'>
          <span>
            <FontAwesomeIcon icon={faCar} size='2x' />
          </span>
          <h3>500K</h3>
          <p>Pizzas delivered</p>
        </div>

        <div className='fact'>
          <span>
            <FontAwesomeIcon icon={faMale} size='2x' />
            <FontAwesomeIcon icon={faFemale} size='2x' />
          </span>
          <h3>Over 200K</h3>
          <p>Happy customers</p>
        </div>
      </div>
      <div className='why'>
        <h1>
          <span>Why</span> Pizza Nini
        </h1>
        <div className='reasons'>
          <div className='reason'>
            <span>
              <FontAwesomeIcon icon={faSmile} size='2x' />
            </span>
            <h3> Quality products</h3>
            <p>We make sure to use the best products in our pizzas.</p>
          </div>

          <div className='reason'>
            <span>
              <FontAwesomeIcon icon={faLaptop} size='2x' />
            </span>
            <h3>Online delivery</h3>
            <p>Choose between 10 countries worlwide to make your delivery.</p>
          </div>

          <div className='reason'>
            <span>
              <FontAwesomeIcon icon={faHandPeace} size='2x' />
            </span>
            <h3>Experience</h3>
            <p>
              With over 30 years of experience, we assure you that you will feel
              right at home with our friendly employees!
            </p>
          </div>
        </div>
        <button>Order now</button>
      </div>
    </div>
  );
}
