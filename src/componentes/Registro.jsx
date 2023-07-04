
import Header from './Header';

function Registro() {
  const urlBase = "https://647bdcaec0bae2880ad048d1.mockapi.io/users";

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
      postError.innerText = error;
    }
  }

  function sendUser(e) {
    e.preventDefault();
    let newUser = {
      name: e.target[0].value,
    }
    addOne(newUser)
  }

  return (
    <>
      <Header />
      <h2 className="text-center font-bold text-3xl">Registrar usuario</h2>
      <div className="container w-3/4 md:w-2/4 lg:w-1/3 mx-auto flex justify-center">
        <form onSubmit={sendUser} className="w-full bg-gray-300 rounded-md my-4 p-4">
          <div className="flex flex-col ml-6">
            <label htmlFor="nombre" className="w-full">Nombre</label>
            <input type="text" name="nombre" id="nombre" className="w-5/6 rounded-md border focus:outline-none focus:border-indigo-400" />
          </div>
          <div className="flex flex-col ml-6">
            <label htmlFor="email" className="w-full">Email</label>
            <input type="email" name="email" id="email" className="w-5/6 rounded-md border focus:outline-none focus:border-indigo-400" />
          </div>
          <div className="flex flex-col ml-6">
            <label htmlFor="password" className="w-full">Contraseña</label>
            <input type="password" name="password" id="password" className="w-5/6 rounded-md border focus:outline-none focus:border-indigo-400" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-indigo-400 text-xs rounded-sm font-bold p-1 text-white mt-3">Registrarse</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registro;

