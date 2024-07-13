import { Link } from "react-router-dom";
import '../css/navbar.css'

function NavbarComponent() {
  return (
    <header className="nav-container">
      <nav className="section-width poppins-regular">
        <ul>
          <li>
            <Link to='/about-us'>Nosotros</Link>
          </li>
          <li>
            <Link to='/services'>Servicios</Link>
          </li>
        </ul>
        <Link to='/'>Inicio</Link>
        <ul>
          <li>
            <Link to='/portfolio'>Portafolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;
