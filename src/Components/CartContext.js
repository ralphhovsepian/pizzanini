import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [pizza, setPizza] = useState([
    {
      id: 0,
      type: 'Margherita',
      price: 9.99,
      quantity: 0,
      total: 0,
    },
    {
      id: 1,
      type: 'Pepperoni',
      price: 12.99,
      quantity: 0,
      total: 0,
    },
    {
      id: 2,
      type: 'Hawaiian',
      price: 14.99,
      quantity: 0,
      total: 0,
    },
    {
      id: 3,
      type: 'Veggie',
      price: 14.99,
      quantity: 0,
      total: 0,
    },
  ]);

  const [check, setCheck] = useState(0);

  return (
    <CartContext.Provider
      value={{ pizzaName: [pizza, setPizza], checkTotal: [check, setCheck] }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
