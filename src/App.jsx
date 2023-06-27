import { Route, Routes } from 'react-router-dom';
// import Header from './componentes/Header';
import Nosotros from './componentes/Nosotros';
import Users from './componentes/Users';
import Login from './componentes/Login';
import Registro from './componentes/Registro';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/register' element={<Registro />} />
        <Route exact path='/Users' element={<Users />} />
      </Routes>
    </>
  )
}

export default App