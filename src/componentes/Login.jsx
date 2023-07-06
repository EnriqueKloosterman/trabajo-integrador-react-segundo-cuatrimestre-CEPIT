import { useEffect,  useState,  useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext.jsx'

function Login() {
  const initialUrl = 'https://647bdcaec0bae2880ad048d1.mockapi.io/users';

  //* Estado global por medio de useContext
  const { user, handleLogin, handleLogOut } = useContext(UserContext);
  //* Estados para los inputs de login
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  //* Estado pora users y errores
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  //* Funcion para obtener los usuarios
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

  //* funcion para manejar el submit del formulario
  function handleSubmit(e) {
    e.preventDefault();

    const user = users.find(
      (usr) => usr.email === userName && usr.password === userPassword
    );
    console.log(user);

    if (user) {
      handleLogin(user);
      setError('Usuario logueado correctamente');
    } else {
      setError('Email o password incorrectos');
    }
    e.target.reset();
  }

  return (
    <>
      <div className='container-lg h-screen flex justify-center items-center '>

        <div className='w-full'>
          <div>
            {user ? (
              <div>
                <h2 className='font-bold text-center text-xl'>Bienvenido {user.name}</h2>
                <button className='p-1 rounded-md bg-cyan-100' onClick={handleLogOut}>Cerrar sesión</button>
              </div>
            ) : (
              <div>
                <h2 className='text-center text-4xl font-bold '>Login</h2>
                <div className='w-2/4 bg-slate-300/40 mx-auto mt-10 p-5 rounded-lg'>
                  <form onSubmit={handleSubmit}>
                    <div className='w-5/6 mx-auto my-4'>
                      <label htmlFor="name">Email</label>
                      <input type="email" name="email" id="name" placeholder="e@mail.com" onChange={(e) => setUserName(e.target.value)} className='w-full rounded-md mt-2 p-1 border focus:outline-none focus:border-indigo-400 focus:border-2' />
                    </div>
                    <div className='w-5/6 mx-auto my-4'>
                      <label htmlFor="password">Contraseña</label>
                      <input type="password" name="password" id="password" placeholder="password" onChange={(e) => setUserPassword(e.target.value)} className='w-full rounded-md mt-2 p-1 focus:outline-none focus:border-indigo-400 focus:border-2' />
                    </div>
                    <div className='w-5/6 mx-auto mt-4 text-center'>
                      <p>¿No estas registrado?</p>
                      <p ><Link to="register">Registrate <span className='text-indigo-500'>aqui</span></Link></p>
                    </div>
                    <div className='flex justify-center mt-3'>
                      <button type="submit" className='bg-indigo-400 text-md rounded-md font-bold px-2 py-1 text-white mt-3'>Iniciar Sesión</button>
                    </div>
                  </form>
                  <div className='w-5/6 mx-auto my-4'>
                    <p id="notificacion"  className='text-center text-xs text-red-600'>{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;
