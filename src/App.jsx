import Nosotros from './componentes/Nosotros';
import Users from './componentes/Users';
import Login from './componentes/Login';
import Registro from './componentes/Registro';


function App() {
  return (
    <>
      <div>Agenda de notas</div>
      <Users />
      <Nosotros />
      <Login/>
      <Registro />
    </>
  )
}

export default App