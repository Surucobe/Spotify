import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../Context/useAuthHook';

import { LoginRoute } from '../Constants/routes';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	let auth = useAuth();
	
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <Component { ...rest } />
        ) : (
          <Redirect
            to={{
              pathname: LoginRoute,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;