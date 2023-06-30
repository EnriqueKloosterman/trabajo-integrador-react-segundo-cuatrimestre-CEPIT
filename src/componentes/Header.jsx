import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="w-3/4 bg-slate-300 p-3 my-3 mx-auto">
      <h2 className="text-white font-bold text-center">Header</h2>
      <header>
        <nav>
          <ul className="navUl">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;





