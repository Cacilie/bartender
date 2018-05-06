import React from 'react';
import { Route, Switch } from 'react-router-dom';



import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';




const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  </App>

export default AppRoutes;
