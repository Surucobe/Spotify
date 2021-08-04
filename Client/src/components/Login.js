import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../Context/useAuthHook';

import { SignUpRoute, DashboardRoute } from '../Constants/routes';

import '../styles/Login.css';

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const history = useHistory();

	const auth = useAuth();

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`${email}\n${password}`);
		auth.signin(email, password, history.push?.(DashboardRoute));
		setEmail('');
		setPassword('');
		history.push?.(DashboardRoute)
	}

	return(
		<div className="Login_Form">
			<form onSubmit={ handleSubmit } >
				<label>Email: </label>
				<input
					type='email' 
					placeholder='Enter your email' 
					value={ email }
					autoComplete='on'
					onChange={ (event) => setEmail(event.target.value) }
				/>
				<label>Password: </label>
				<input
					type='password'
					placeholder='Enter your password'
					value={ password }
					autoComplete='off'
					onChange={ (event) => setPassword(event.target.value) }
				/>
				<button type='submit'><b>Login</b></button> <br/>
				<span> <Link className='Form_Link' to={ SignUpRoute } >Sign Up</Link> here if you haven't already</span>
			</form>
		</div>
		)
}

export default Login;