// import Header from './componentes/Header';
import { Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Users from './componentes/Users';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Contacto from './componentes/Contacto';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/register' element={<Registro />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/contacto' element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App