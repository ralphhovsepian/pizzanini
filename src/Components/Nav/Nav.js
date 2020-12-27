import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../Styling/logo.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Nav() {
  const { checkTotal, pizzaName } = useContext(CartContext);
  const [check, setCheck] = checkTotal;
  const [pizza, setPizza] = pizzaName;
  const [isMenu, setIsMenu] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const menuHandler = () => {
    setIsMenu(!isMenu)
  };

  const cartClick = () => {
  setIsCart(!isCart)
  };

  const cartMinus = (e) => {
    pizza.forEach((pizzaType) => {
      if (pizzaType.id === parseInt(e.target.id, 10)) {
        let id = parseInt(e.target.id, 10);
        const newPizza = [...pizza];
        let newQuantity = { ...newPizza[id] };
        newQuantity.quantity--;
        newQuantity.total = newQuantity.quantity * newQuantity.price;

        newPizza[id] = newQuantity;
        setPizza(newPizza);

      }
    });
  };

  return (
    <nav>
      <ul className='nav'>
        <div className='left'>
          <Link to='/pizzanini/'>
            <img src={logo} />
          </Link>
        </div>
        <div className='right'>
          <Link to='/pizzanini/about/'>
            <li>About</li>
          </Link>

          <a href='#menu'>
            <li>Menu</li>
          </a>

          <a href='#contact'>
            <li>Contact</li>
          </a>
          <li className='cart' onClick={cartClick}>
            Cart
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </div>
      </ul>

      <ul className='mobileNav'>
        <li>
          <Link to='/pizzanini/'>
            <img className='mobilelogo' src={logo} />
          </Link>
        </li>

        <li className='menuBtn' onClick={menuHandler}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
      {
        isMenu &&

      <div className='itemsMobile'>
        <li>
          <Link to='/pizzanini/about/'>About </Link>
        </li>

        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li className='cart' onClick={cartClick}>
          Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
      </div>
    }
    {isCart &&
      <div className='checkoutCart'>
        <h1>Cart</h1>
        <p id='total'>Total: ${check}</p>

        {pizza.map((pizzaType, key) => {
          if (pizzaType.quantity > 0) {
            return (
              <div className="item">
              <p key={key}>
                {pizzaType.type}
              </p>

              <p>
              {pizzaType.quantity} x $
              {pizzaType.price}
              </p>
              <button
                id={pizzaType.id}
                className='remove'
                onClick={cartMinus}
              >
                x
              </button>
              </div>
            );
          }
        })}
        {check > 0 ? <Link to="/pizzanini/checkout" onClick={() => setIsCart(false)} className='checkoutBtn'>Checkout</Link> : ''}
      </div>
    }
    </nav>
  );
}
