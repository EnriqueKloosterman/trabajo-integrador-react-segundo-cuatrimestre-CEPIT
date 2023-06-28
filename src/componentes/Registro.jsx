import Header from './Header';

function Registro() {
  function addOne(user) {
    const urlBase = 'https://647bdcaec0bae2880ad048d1.mockapi.io/users';

    fetch(urlBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newUser = {
      name: e.target.nombre.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    addOne(newUser);

    e.target.reset();
  }

  return (
    <>
      <Header />
        <h2 className='text-center font-bold text-3xl'>Registrar usuario</h2>
      <div className='contanier w-3/4 md:w-2/4 lg:w-1/3  mx-auto flex justify-center'>
        <form onSubmit={handleSubmit} className='w-full bg-slate-300 rounded-md my-4 p-4'>
          <div className='flex flex-col ml-6'>
            <label htmlFor="nombre" className='w-full '>Nombre</label>
            <input type="text" name="nombre" id="nombre" className='w-5/6 rounded-md '/>
          </div>
          <div className='flex flex-col ml-6'>
            <label htmlFor="email" className='w-full'>Email</label>
            <input type="email" name="email" id="email" className='w-5/6 rounded-md ' />
          </div>
          <div className='flex flex-col ml-6'>
            <label htmlFor="password" className='w-full'>Contraseña</label>
            <input type="password" name="password" id="password" className='w-5/6 rounded-md '/>
          </div>
          <div className='flex justify-end'>
            <button type="submit" className='bg-indigo-400 text-xs rounded-sm font-bold p-1 text-white mt-3'>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registro;
