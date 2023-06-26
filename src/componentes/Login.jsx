import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';

function Login() {
  const initialUrl = 'https://647bdcaec0bae2880ad048d1.mockapi.io/users';
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(initialUrl);
  }, []);

  const notificacionRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    let loginUser = {
      name: e.target.nombre.value,
      password: e.target.password.value,
    };

    let userFound = users.find((user) => user.name === loginUser.name);

    if (userFound && userFound.password === loginUser.password) {
      notificacionRef.current.style.color = 'green';
      notificacionRef.current.innerHTML = 'Usuario Logueado';
    } else {
      notificacionRef.current.style.color = 'red';
      notificacionRef.current.innerHTML = 'Datos Incorrectos';
    }

    e.target.reset();
  }

  return (
    <>
      <Header />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />

        <p id="notificacion" ref={notificacionRef}></p>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Login;

