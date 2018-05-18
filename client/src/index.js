import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import AppRoutes from './routes';


import './index.css';

import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
