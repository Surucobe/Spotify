import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import * as Rutas from '../Constants/routes';

import { useAuth } from '../Context/useAuthHook'

import NavigationBar from '../components/NavigationBar';
import SignUpForm from '../components/SignUpForm';
import Hero from '../components/Hero';
import Login from '../components/Login';
import ProtectedRoute from '../components/ProtectedRoute';
import Dashboard from '../components/Dashboard';

const App = () => {
	const { isLoading } = useAuth();

	return isLoading ? (
		<h1>Wait just a bit...</h1>
		)
	:(
		<BrowserRouter>
			<NavigationBar />
			<Switch>

	  		<Route exact path={ Rutas.SignUpRoute } component={ SignUpForm } />

  			<Route exact path={ Rutas.HomeRoute } component={ Hero } />

  			<Route exact path={ Rutas.LoginRoute } component={ Login } />

  			<ProtectedRoute
  			 exact path={ Rutas.DashboardRoute }
  			 component={ Dashboard }
  			/>

			</Switch>
		</BrowserRouter>
		)
}

export default App;
