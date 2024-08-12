/* eslint-disable react/prop-types */
import "../css/components-css/hero-video-component.css";
import ButtonComponent from "./ButtonComponent";
function HeroVideoComponent(props) {
  return (
    <div className="box-video">
      <video src={props.video} autoPlay muted loop></video>
      <div className="info-vid">
        <div className="info-div-wrapper">
          <h1 className="oswald-title">
            {props.fraseUno}
            <br />
            <span>{props.spam}</span>
            <br /> {props.fraseDos}
          </h1>
          <p className="poppins-light">{props.p}</p>
          <div className="button-container">
            {/* <ButtonComponent path="/portfolio" name="Trabajos" /> */}
            <ButtonComponent path={props.path} name={props.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVideoComponent;
