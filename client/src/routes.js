import React from 'react';
import { Route, Switch } from 'react-router-dom';



import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';

import AddDrink from './components/AddDrink';
import Drinks from './components/Drinks'

import DrinksToOrder from './components/OrderDrink/Drinks'
import OrderDrink from  './components/OrderDrink/';
import ViewOrders from './components/ViewOrders';



const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/adddrink" component={AddDrink} />
      <Route path="/drinks" component={Drinks} />
      <Route path="/orderdrinks" component={DrinksToOrder} />
      <Route path="/orderdrink/:id" component={OrderDrink} />
      <Route path="/vieworders" component={ViewOrders} />
      <Route path="/register" component={Register} />
    </Switch>
  </App>

export default AppRoutes;
