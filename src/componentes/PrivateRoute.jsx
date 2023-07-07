function PrivateRoute({ component: Component, ...rest }) {
    const isUserAuthenticated = useAuth(); 
    return (
      <Route
        {...rest}
        element={isUserAuthenticated ? <Component /> : <Navigate to="/register" />}
      />
    );
  }  

export default PrivateRoute;
