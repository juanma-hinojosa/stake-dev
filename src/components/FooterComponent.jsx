import { Link } from "react-router-dom";
import "../css/footer.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "/images/logo.png";

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
    { id: 1, info: "contacto@stakedev.net", icon: "mdi:gmail" },
    // { id: 2, info: "stakedev-consultas@stakedev.net", icon: "mdi:gmail" },
  ];

  const infoLinks = [
    { id: 0, path: "/ask-us", name: "Preguntas Frecuentes" },
    { id: 1, path: "/about-us", name: "nosotros" },
    { id: 2, path: "/portfolio", name: "trabajos" },
  ];
  const iconsSocial = [
    { id: 0, icon: "ic:baseline-facebook", link: "https://www.facebook.com/people/Stake-Dev/61571896937520/" },
    { id: 1, icon: "mdi:instagram", link: "https://www.instagram.com/stake.dev/" },
    // { id: 3, icon: "ic:baseline-whatsapp", link: "#" },
    { id: 4, icon: "mdi:linkedin", link: "https://www.linkedin.com/company/stake-dev/about/" },
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
          <h1 className="oswald-title">Navegar</h1>
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
              <p className="item" style={{ textTransform: "lowercase" }}>
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
          <a href={socialIcon.link} key={socialIcon.id} target="_blank">
            <Icon className="icon-footer" icon={socialIcon.icon} />
          </a>
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
