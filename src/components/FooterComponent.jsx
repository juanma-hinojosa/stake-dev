import { Link } from "react-router-dom";
import "../css/footer.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from '../../public/images/logo.png'

function FooterComponent() {
  function getYear() {
    return new Date().getFullYear();
  }
  const navLinks = [
    { id: 0, path: "/", name: "inicio" },
    // { id: 1, path: "/services", name: "servicios" },
    { id: 2, path: "/about-us", name: "nosotros" },
    { id: 3, path: "/portfolio", name: "trabajos" },
  ];

  const contactanos = [
    { id: 0, info: "1132986884", icon: "ic:baseline-phone" },
    { id: 1, info: "stakedev@gmail.com", icon: "mdi:gmail" },
    { id: 2, info: "stakedev-consultas@gmail.com", icon: "mdi:gmail" },
  ];

  const infoLinks = [
    { id: 0, path: "/legal", name: "contrato" },
    { id: 1, path: "/about-us", name: "nosotros" },
    { id: 2, path: "/portfolio", name: "trabajos" },
    { id: 3, path: "/bases", name: "bases y condiciones" },
  ];
  const iconsSocial = [
    { id: 0, icon: "ic:baseline-facebook" },
    { id: 1, icon: "mdi:instagram" },
    { id: 2, icon: "mdi:gmail" },
    { id: 3, icon: "ic:baseline-whatsapp" },
    { id: 4, icon: "mdi:github" },
  ];
  return (
    <footer>
      <div className="columns-container">
        <li className="column">
          <ul className="item">
            <img src={Logo} alt="Logo StakeDev" />
          </ul>
        </li>

        <li className="column">
          <h1 className="oswald-title">Nuestro Servicios</h1>
          {navLinks.map((link) => (
            <ul key={link.id} className="montserrat-subtitle">
              <Link to={link.path} className="item">
                {link.name}
              </Link>
            </ul>
          ))}
        </li>

        <li className="column">
          <h1 className="oswald-title">Contactanos</h1>
          {contactanos.map((contacto) => (
            <ul key={contacto.id} className="montserrat-subtitle">
              <p className="item">
                <Icon icon={contacto.icon} />
                {contacto.info}
              </p>
            </ul>
          ))}
        </li>

        <li className="column">
          <h1 className="oswald-title">Info</h1>
          {infoLinks.map((linkInfo) => (
            <ul className="montserrat-subtitle" key={linkInfo.id}>
              <Link to={linkInfo.path}>{linkInfo.name}</Link>
            </ul>
          ))}
        </li>
      </div>

      <div className="helper-line"></div>
      <div className="icons-links">
        {iconsSocial.map((socialIcon) => (
          <Icon
            key={socialIcon.id}
            className="icon-footer"
            icon={socialIcon.icon}
          />
        ))}
      </div>
      <div className="text-footer">
        <small className="poppins-regular">
          &copy; {getYear()} <b>Stake Dev</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
}

export default FooterComponent;
