import React from 'react';
import './Newsletter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
export default function Newsletter() {
  return (
    <div className='Newsletter'>
      <div className='left'>
        <h1>
          <span>Subscribe</span> to our Newsletter!
        </h1>
        <form>
          <input type='email' placeholder='Enter your email...' />
          <button>Subscribe</button>
        </form>
      </div>

      <div className='right'>
        <h1>
          <FontAwesomeIcon icon={faPaperPlane} size='4x' />
        </h1>
      </div>
    </div>
  );
}
