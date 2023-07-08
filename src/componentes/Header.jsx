import { Link } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate  } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const handleUser = () => {
    navigate('/')
  }
  return (
    <div className="w-3/4 bg-slate-400/50 p-3 my-3 mx-auto rounded-md ">
      <header>
        <nav className="">
          <ul className='flex flex-row justify-around font-bold text-sm md:text-base lg:text-lg text-white'>
            <li>
              <Link to="/list" className="navLink">
                Tareas
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="navLink">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="navLink">
                Contacto
              </Link>
            </li>
            <li>
              <button onClick={handleUser} className='text-indigo-400'><FaUserLarge /></button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

