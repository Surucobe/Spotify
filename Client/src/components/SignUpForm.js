import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../Context/useAuthHook';

import { LoginRoute } from '../Constants/routes';

import '../styles/SignUpForm.css';

const SignUpForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState();
	const history = useHistory();

	const auth = useAuth();

	const handleSubmit = (event) => {
		event.preventDefault()
		alert(`credentials ${email} ${password}`);
		auth.signup(email, password, history.push(LoginRoute));
		setEmail('');
		setPassword('');
	}
	

	return(
		<div className="container">
			<form onSubmit={handleSubmit} >
				<label>Email: </label>
				<input
				 type='email' 
				 placeholder='Enter your email' 
				 value={email}
				 autoComplete='on'
				 onChange={(event) => setEmail(event.target.value)}
				/>
				<label>Password</label>
				<input 
					type='password' 
					placeholder='Password goes here' 
					value={password}
					autoComplete='off'
				 	onChange={(event) => setPassword(event.target.value)}
				/>
				<button type='submit'><b>Sign Up</b></button> <br/>
				<span> If you aready have an account <Link className='Form_Link' to={ LoginRoute } > click here </Link></span>
			</form>
		</div>
		)
}

export default SignUpForm;