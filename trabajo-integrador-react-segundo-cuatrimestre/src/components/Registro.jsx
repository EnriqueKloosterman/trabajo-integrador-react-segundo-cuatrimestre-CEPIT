import Header from "./Header"
function Registro() {

  function addOne(user) {
    const urlBase = "https://647bdcaec0bae2880ad048d1.mockapi.io/users";

    fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
   
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => postError.innerText=err);
  }

function handleSubmit(e) {
  e.preventDefault()

 
  let newUser = {
    name: e.target.nombre.value,
    password : e.target.password.value
  }

 
  addOne(newUser)

 
  e.target.reset()
}

    return (
      <>
      <Header/>
      <h2>Registrar usuario</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password"/>

        <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
  
  export default Registro