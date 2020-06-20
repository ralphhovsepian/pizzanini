import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';
import Swal from 'sweetalert2';
import './Menu.css';
import margherita from '../Styling/margarita.jpg';
import pepperoni from '../Styling/pepperoni.jpg';
import veggie from '../Styling/veggie.jpg';
import hawaiian from '../Styling/hawaiian.jpg';
export default function Menu() {
  const { pizzaName, checkTotal } = useContext(CartContext);
  const [pizza, setPizza] = pizzaName;
  const [check, setCheck] = checkTotal;

  useEffect(() => {
    let totalCheck =
      pizza[0].total + pizza[1].total + pizza[2].total + pizza[3].total;
    setCheck(totalCheck);
  });

  const cartAdder = (e) => {
    pizza.forEach((pizzaType) => {
      if (pizzaType.id === parseInt(e.target.id, 10)) {
        let id = parseInt(e.target.id, 10);
        const newPizza = [...pizza];
        let newQuantity = { ...newPizza[id] };
        newQuantity.quantity++;
        newQuantity.total = newQuantity.quantity * newQuantity.price;

        newPizza[id] = newQuantity;
        setPizza(newPizza);
      }
    });

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Added to cart',
    });
  };

  return (
    <div className='Menu' id='menu'>
      <h1>
        Nini <span>Pizzas</span>
      </h1>
      <div className='pizzas'>
        <div className='pizza'>
          <img src={margherita} alt='margherita' />
          <h3>Margherita Pizza</h3>
          <button id='0' onClick={cartAdder}>
            Add to cart
          </button>
          <p>
            Price: <span>$9.99</span>
          </p>
        </div>

        <div className='pizza'>
          <img src={pepperoni} alt='pepperoni' />
          <h3>Pepperoni Pizza</h3>
          <button id='1' onClick={cartAdder}>
            Add to cart
          </button>
          <p>
            Price: <span>$12.99</span>
          </p>
        </div>

        <div className='pizza'>
          <img src={hawaiian} alt='hawaiian' />
          <h3>Hawaiian Pizza</h3>
          <button id='2' onClick={cartAdder}>
            Add to cart
          </button>
          <p>
            Price: <span>$14.99</span>
          </p>
        </div>

        <div className='pizza'>
          <img src={veggie} alt='veggie' />
          <h3>Veggie Pizza</h3>
          <button id='3' onClick={cartAdder}>
            Add to cart
          </button>
          <p>
            Price: <span>$14.99</span>
          </p>
        </div>
      </div>
    </div>
  );
}
