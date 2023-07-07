import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Users from './componentes/Users';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Contacto from './componentes/Contacto';
import List from './componentes/List';
import { UserProvider } from './UserContext';
import './App.css';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route element={<ProtectedRoute/>}>
        <Route path="/list" element={<List />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </UserProvider>
  );
}

export default App;



