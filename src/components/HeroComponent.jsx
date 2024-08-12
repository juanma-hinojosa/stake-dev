/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import "../css/hero-component.css";
import ButtonComponent from "./ButtonComponent";

function HeroComponent(props) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `  
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(${props.img})`,
      }}
    >
      <div className="hero-section-container">
        <div className="hero-contain">
          <h1 className="oswald-title">
            {props.fraseUno} 
            <br />
            <span>{props.spam}</span> 
            <br />
            {props.fraseDos}
          </h1>
          <p className="poppins-light">{props.p}</p>
          <div className="button-container">
            <ButtonComponent path={props.path} name={props.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
