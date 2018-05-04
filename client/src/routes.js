//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './components/App/App';

const AppRoutes = () =>
  <App>
		<Switch>
			<Route path="/app" component={App} />
		</Switch>
	</App>;

	export default AppRoutes;