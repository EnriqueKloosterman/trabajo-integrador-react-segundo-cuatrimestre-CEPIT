 import React from 'react';
    import { Route, Navigate } from 'react-router-dom';
    import { useAuth } from './Auth'; // Importa la función useAuth desde el archivo Auth.js
    
    function PrivateRoute({ component: Component, ...rest }) {
      const isUserAuthenticated = useAuth(); // Utiliza la función useAuth() para verificar si el usuario está autenticado.
    
      return (
        <Route
          {...rest}
          element={isUserAuthenticated ? <Component /> : <Navigate to="/register" />}
        />
      );
    }

export default PrivateRoute;
