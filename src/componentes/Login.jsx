import { useEffect, useRef, useState } from 'react';
import logoYoutube from '../assets/youtube-logo-youtube-icon-transparent-free-png.webp';

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
      email: e.target.email.value,
      password: e.target.password.value,
    };

    let userFound = users.find((user) => user.email === loginUser.email);

    if (userFound && userFound.password === loginUser.password) {
      notificacionRef.current.style.color = 'green';
      notificacionRef.current.innerHTML = 'Usuario Logueado';
    } else {
      notificacionRef.current.style.color = 'red';
      notificacionRef.current.innerHTML = 'Credenciales incorrectas';
    }

    e.target.reset();
  }

  return (
    <>
      <a href="https://www.youtube.com"><img src={logoYoutube} alt="123" /></a>
      <div className='container-lg mx-auto'>
        <h2 className='text-center text-4xl font-bold '>Login</h2>
        <div className='w-2/4 bg-slate-300 mx-auto mt-10 p-5 rounded-lg'>
          <form onSubmit={handleSubmit}>
            <div className='w-5/6 mx-auto my-4'>
              <label htmlFor="text">Email</label>
              <input type="email" name="email" id="email" className='w-full rounded-md mt-2 p-1 border focus:outline-none focus:border-indigo-400 focus:border-2' />
            </div>
            <div className='w-5/6 mx-auto my-4'>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" className='w-full rounded-md mt-2 p-1 focus:outline-none focus:border-indigo-400 focus:border-2' />
            </div>
            <div className='flex justify-end'>
              <button type="submit" className='bg-indigo-400 text-md rounded-md font-bold px-2 py-1 text-white mt-3'>Iniciar Sesión</button>
            </div>
          </form>
          <div className='w-5/6 mx-auto my-4'>
            <p id="notificacion" ref={notificacionRef} className='text-center text-xs text-red-600'></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
