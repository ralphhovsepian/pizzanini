import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from '../CartContext';

import './App.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import OrderInfo from '../OrderInfo/OrderInfo';
import Menu from '../Menu/Menu';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Checkout from '../Checkout/Checkout';
import Shipping from '../Checkout/Shipping';
import PrivateRoute from './PrivateRoute'
const App = () => {


  return (
    <CartProvider>
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route
              exact
              path='/pizzanini/'
              render={(props) => (
                <Fragment>
                  <Header />
                  <OrderInfo />
                  <Menu />
                  <Newsletter />
                </Fragment>
              )}
            />
            <Route exact path='/pizzanini/about/' component={About} />
            <Route exact path='/pizzanini/checkout/'><Checkout/></Route>
            <PrivateRoute component={Shipping} path="/pizzanini/shipping/" exact/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
