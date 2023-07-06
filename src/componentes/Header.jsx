import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="w-3/4 bg-slate-300 p-3 my-3 mx-auto">
      <h2 className="text-white font-bold text-center"></h2>
      <header>
        <nav>
          <ul className="navUl">
            <li>
              <Link to="/list" className="navLink">
                Inicio
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
          </ul>
        </nav>
      </header>

      <style >{`
        .navUl {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .navUl li {
          margin-right: 10px;
        }

        .navLink {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }

        .navLink:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Header;

