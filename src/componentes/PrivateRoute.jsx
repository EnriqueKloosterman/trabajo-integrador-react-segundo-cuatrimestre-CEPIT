import React from 'react';

import {
  Navigate,
  Route,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, list, ... rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;