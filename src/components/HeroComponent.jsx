/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import "../css/hero-component.css";
import ButtonComponent from "./ButtonComponent";

function HeroComponent(props) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <div className="hero-section-container">
        <div className="hero-contain">
          <h1 className="oswald-title">
            Desarollemos tu sitio web <span>increible</span> para tu negocio
          </h1>
          <p className="poppins-light">{props.p}</p>

          <ButtonComponent path={props.path} name={props.name} />
          {/* <Link to="/portfolio">Trabajos</Link> */}
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
