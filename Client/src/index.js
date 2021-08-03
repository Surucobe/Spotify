import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";

import { FirebaseContext } from './Context/FirebaseContext';
import { ProvideAuth } from './Context/useAuthHook';
import { Firebase } from './firebase/config';

import './styles/Main.css';

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ Firebase }} >
			<ProvideAuth>
				<App />
			</ProvideAuth>
		</FirebaseContext.Provider>
	</React.StrictMode>, 
	document.getElementById("app")
	);
