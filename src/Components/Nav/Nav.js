import React, { useContext } from 'react';
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

  const menuHandler = () => {
    let menuBtn = document.querySelector('.menuBtn');

    menuBtn.classList.toggle('opened');

    if (menuBtn.className === 'menuBtn opened') {
      document.querySelector('.itemsMobile').style.display = 'flex';
    } else {
      document.querySelector('.itemsMobile').style.display = 'none';
    }
  };

  const cartClick = () => {
    let cart = document.querySelector('.cart');

    cart.classList.toggle('opened');

    if (cart.className === 'cart opened') {
      document.querySelector('.checkoutCart').style.display = 'block';
    } else {
      document.querySelector('.checkoutCart').style.display = 'none';
    }
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
          <Link to='/about'>
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
          <img className='mobilelogo' src={logo} />
        </li>

        <li className='menuBtn' onClick={menuHandler}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
      <div className='itemsMobile'>
        <li>About</li>
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
      <div className='checkoutCart'>
        <h1>Cart</h1>
        <p id='total'>Total: ${check}</p>

        {pizza.map((pizzaType, key) => {
          if (pizzaType.quantity > 0) {
            return (
              <h4 key={key}>
                {pizzaType.type}: {pizzaType.quantity} x ${pizzaType.price}
                <button
                  id={pizzaType.id}
                  className='remove'
                  onClick={cartMinus}
                >
                  x
                </button>
              </h4>
            );
          }
        })}
        {check > 0 ? <button className='checkoutBtn'>Checkout</button> : ''}
      </div>
    </nav>
  );
}
