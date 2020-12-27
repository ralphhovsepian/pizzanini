import React, {useEffect, useState, useContext} from 'react';
import { CartContext } from '../CartContext';
import './Checkout.css';
import {Link} from 'react-router-dom';


const Checkout = () => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();
  const { pizzaName, checkTotal } = useContext(CartContext);
  const [check, setCheck] = checkTotal;
  const [pizza, setPizza] = pizzaName;
  const [page, setPage] = useState('cart');



  useEffect(() => {
    let totalCheck = 0;
    for(let i = 0; i < pizza.length; i++) {
      totalCheck += pizza[i].total;
    }
    setCheck(totalCheck);

  }, [pizza]);


useEffect(() => {

  window.paypal.Buttons({

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: check
            }
          }]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          setPaid(true);
          setError(false);
        });
      },

      onError: function(err) {
        setError(true)
        setPaid(false);
      }
    }).render(paypalRef.current);

}, [])

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
      console.log(newPizza);
    }
  });
};


  return(
    <div>
    <div className="summary">
    <h1>Summary: ${check}</h1>

    {pizza.map((pizzaType, key) => {
      if (pizzaType.quantity > 0) {
        return (
          <div className="item" key={key}>
          <p>
            {pizzaType.type}
          </p>

          <p>
          {pizzaType.quantity} x $
          {pizzaType.price}
          </p>
          <button
            id={pizzaType.id}
            className='remove'
            onClick={(e) => cartMinus(e)}
          >
            x
          </button>
          </div>
        );
      }
    })}


    {check > 0 && <Link to="/pizzanini/shipping" className="nextBtn">Next</Link>}
    {check == 0 && <div className="clear"><h1>Nothing in the cart...</h1></div>}
    {console.log(check)}
    </div>
    </div>
  )
}

export default Checkout;
