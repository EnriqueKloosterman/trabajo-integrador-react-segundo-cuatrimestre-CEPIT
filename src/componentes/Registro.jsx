import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';

function Registro() {
  const urlBase = "https://647bdcaec0bae2880ad048d1.mockapi.io/users";
  const navigate = useNavigate();

  async function addOne(user) {
    try {
      const response = await fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }

  function sendUser(e) {
    e.preventDefault();
    let newUser = {
      name: e.target.nombre.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
      password: e.target.password.value,
    }
    addOne(newUser)
    e.target.reset()
    navigate("/")
  }

  return (
    <>
      <Header />
      <div className='container-lg h-screen flex flex-col justify-center items-center '>
        <div className='w-5/6 md:w-3/4 lg:w-2/4 bg-slate-300/50 mx-auto mt-10 p-5 rounded-lg'>
          <h2 className="text-center font-bold text-3xl bg-indigo-600/50 p-2 rounded-md text-white">Registrarse</h2>
          <form onSubmit={sendUser} className="w-full">
            <div className='w-5/6 mx-auto my-4'>
              <label htmlFor="nombre" className="w-full">Nombre</label>
              <input type="text" name="nombre" id="nombre" className='w-full rounded-md mt-2 p-1 border focus:outline-none focus:border-indigo-400 focus:border-2' />
            </div>
            <div className='w-5/6 mx-auto my-4'>
              <label htmlFor="email" className="w-full">Email</label>
              <input type="email" name="email" id="email" className='w-full rounded-md mt-2 p-1 border focus:outline-none focus:border-indigo-400 focus:border-2' />
            </div>
            <div className='w-5/6 mx-auto my-4'>
              <label htmlFor="avatar" className="w-full">Avatar</label>
              <input type="text" name="avatar" id="avatar" className='w-full rounded-md mt-2 p-1 border focus:outline-none focus:border-indigo-400 focus:border-2' />
            </div>
            <div className='w-5/6 mx-auto my-4'>
              <label htmlFor="password" className="w-full">Contraseña</label>
              <input type="password" name="password" id="password" className='w-full rounded-md mt-2 p-1 border focus:outline-none focus:border-indigo-400 focus:border-2' />
            </div>
            <div className='w-5/6 mx-auto mt-4 text-center'>
                <p>Volver al <Link to="/"><span className='text-indigo-500'>Login</span></Link></p>
            </div>
            <div className="flex justify-end">
              <button type="submit" className='bg-indigo-400 text-md rounded-md font-bold px-2 py-1 text-white mt-3'>Crear Usuario</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registro;

