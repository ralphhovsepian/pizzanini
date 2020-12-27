import React, {useEffect, useState, useContext} from 'react';
import { CartContext } from '../CartContext';
import './Checkout.css';
import {Link} from 'react-router-dom';


const Shipping = () => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();
  const { pizzaName, checkTotal } = useContext(CartContext);
  const [check, setCheck] = checkTotal;
  const [pizza, setPizza] = pizzaName;
  const [page, setPage] = useState('cart');
  const [paypal, setPaypal] = useState(false);

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

}, [paypal])

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


const onSubmit = (e) => {

  e.preventDefault()
  setPaypal(true);
}

  return(
    <div>
    <div className="summary shipping">
    <h1>Summary: ${check}</h1>

{
  !paypal &&
  <form onSubmit={e => onSubmit(e)}>
      <label for="fullname">Full Name</label>
      <input type="text" id="fullname" placeholder="Full name" required/>

      <label for="address">Address</label>
      <input id="address" type="text" placeholder="Address" required/>

      <label for="apt">Apartment</label>
      <input id="apt" type="text" placeholder="Apartment" required/>

      <label for="city">City</label>
      <input id="city" type="text" placeholder="City" required/>

      <label for="number">Phone number</label>
      <input id="number" type="text" placeholder="Phone number" required/>

      <input type="submit" className="nextBtn" value="Pay now"/>
  </form>
}
    {paypal && check > 0 && !paid && !error && <div ref={paypalRef} className="paypal"></div>}
    {paid && <div className="succeed"><h1>Payment successfully completed</h1></div>}
    {error && <div className="error"><h1>Payment did not succeed</h1></div>}
    </div>
    </div>
  )
}

export default Shipping;
