import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { CartContext } from '../CartContext';



const PrivateRoute = ({component: Component, ...rest}) => {

  const { pizzaName, checkTotal } = useContext(CartContext);
  const [check, setCheck] = checkTotal;
  const [pizza, setPizza] = pizzaName;

  return(
    <Route {...rest}>
      {
        check ?
        <Component/>
        :
        <Redirect to="/pizzanini/"/>
      }
    </Route>
  )
}

export default PrivateRoute;
