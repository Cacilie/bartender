import React from 'react';
import { Route, Switch } from 'react-router-dom';



import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import AddDrink from './components/AddDrink';
import OrderDrink from  './components/OrderDrink';




const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/adddrink" component={AddDrink} />
      <Route path="/orderdrink/:id" component={OrderDrink} />
    </Switch>
  </App>

export default AppRoutes;
