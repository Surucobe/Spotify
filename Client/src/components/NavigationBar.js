import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../Context/useAuthHook';
import SpotifySearchResult from './SpotifySearchResult'

import * as Rutas from '../Constants/routes';

import '../styles/NavigationBar.css';

const NavigationBar = () => {
	let auth = useAuth();
	const history = useHistory();

	const handleLogOut = () => {
		alert(`We hope to see you soon!`);
		auth.signout();
		history.push(Rutas.HomeRoute);
	}

	return(
		<header className='NavigationBar'>
			<nav>
				<ul>
					<Link to={ Rutas.HomeRoute } ><li>Home</li></Link>
					{
						auth.user ?
						<>
							{location === Rutas.DashboardRoute ? SpotifySearchResult : null}
							<Link to={ Rutas.DashboardRoute } ><li>Dashboard</li></Link> 
							<li className='SignOut' onClick={ handleLogOut } > Sign Out </li>
						</> :
						<>
							<Link to={ Rutas.SignUpRoute } ><li>Sign up</li></Link>
							<Link to={ Rutas.LoginRoute } ><li>Login</li></Link>
						</>
						}
				</ul>
			</nav>
		</header>
		)
}

export default NavigationBar;