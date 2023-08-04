import React from 'react';
import {Route, Redirect} from 'react-route-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }
      />
    );
  };

  export default PrivateRoute;