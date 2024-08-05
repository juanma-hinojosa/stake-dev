import { Link } from "react-router-dom";
import "../css/footer.css";
import { Icon } from "@iconify/react/dist/iconify.js";

function FooterComponent() {
  const navLinks = [
    { id: 0, path: "/", name: "inicio" },
    { id: 1, path: "/services", name: "servicios" },
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
  return (
    <footer>
      <div className="columns-container">
        <li className="column">
          <ul className="item">
            <h1>Stake Dev</h1>
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
        <Icon className="icon-footer" icon="ic:baseline-facebook" />
        <Icon className="icon-footer" icon="mdi:instagram" />
        <Icon className="icon-footer" icon="mdi:gmail" />
        <Icon className="icon-footer" icon="ic:baseline-whatsapp" />
        <Icon className="icon-footer" icon="mdi:github" />
      </div>
    </footer>
  );
}

export default FooterComponent;
