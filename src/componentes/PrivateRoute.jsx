import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" replace state={{ from: props.location }} />
        )
      }
    />
  );
};

export default PrivateRoute;
