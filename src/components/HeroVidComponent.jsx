/* eslint-disable react/prop-types */
import "../css/components-css/hero-video-component.css";
import ButtonComponent from "./ButtonComponent";
function HeroVideoComponent(props) {
  return (
    <div className="box-video">
      <video src={props.video} autoPlay muted loop></video>
      <div className="info-vid">
        <div>
          <h1 className="oswald-title">
            {props.fraseUno} <span>{props.spam}</span> {props.fraseDos}
          </h1>
          <p className="poppins-light">{props.p}</p>
          <div className="button-container">
            <ButtonComponent path="/portfolio" name="Trabajos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVideoComponent;
