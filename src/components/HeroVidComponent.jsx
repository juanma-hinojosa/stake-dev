/* eslint-disable react/prop-types */
import "../css/components-css/hero-video-component.css";
function HeroVideoComponent(props) {
  return (
    <section className="box-video">
      <video src={props.video} autoPlay muted loop></video>
      <section>
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
      </section>
    </section>
  );
}

export default HeroVideoComponent;
