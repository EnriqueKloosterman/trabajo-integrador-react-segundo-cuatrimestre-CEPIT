import { Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Users from './componentes/Users';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Contacto from './componentes/Contacto';
import List from './componentes/List';
import { UserProvider} from './UserContext'
import './App.css'



function App() {
  return (
    <UserProvider>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/register' element={<Registro />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/contacto' element={<Contacto />} />
        <Route exact path='/list' element={<List />} />
      </Routes>
    </UserProvider>
  )
}

export default App