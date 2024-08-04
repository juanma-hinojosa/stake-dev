/* eslint-disable no-unused-vars */
// import logo from "../images/logo.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/navbar-component.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function NavbarComponentTwo() {
  const [navbar, setNavbar] = useState(false);
  const navLinks = [
    { id: 0, path: "/", name: "inicio" },
    { id: 1, path: "/services", name: "servicios" },
    { id: 2, path: "/about-us", name: "nosotros" },
    { id: 3, path: "/portfolio", name: "trabajos" },
    { id: 4, path: "/contact", name: "contacto" },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  };

  window.addEventListener("scroll", changeBackground);

  function openMenu() {
    const nav = document.querySelector("#nav-container");
    nav.classList.add("visible");
  }

  function closeMenu() {
    const nav = document.querySelector("#nav-container");
    nav.classList.remove("visible");
  }

  return (
    // <header className="header-container active poppins-regular">
    <header className={navbar ? 'header-container active poppins-regular' : 'header-container poppins-regular'} >
      <section>
        <a href="#">LOGO</a>
        <div onClick={openMenu} className="abrir-menu" id="abrir-menu">
          <Icon className="icon-dark" icon="material-symbols-light:menu" />
        </div>
        <nav className="nav-container" id="nav-container">
          <div onClick={closeMenu} id="cerrar-menu" className="cerrar-menu">
            <Icon icon="material-symbols-light:close" />
          </div>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link onClick={closeMenu} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default NavbarComponentTwo;
