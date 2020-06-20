import React from 'react';
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
export default function App() {
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
                <React.Fragment>
                  <Header />
                  <OrderInfo />
                  <Menu />
                  <Newsletter />
                </React.Fragment>
              )}
            />
            <Route exact path='/pizzanini/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
