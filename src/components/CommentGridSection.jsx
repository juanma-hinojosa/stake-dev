/* eslint-disable react/no-unescaped-entities */
// import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/components-css/section-grid-comment.css";
import VideoComponent from "/images/nosotros-component.mp4";
function CommentGridSection() {
  return (
    <section className="section-width">
      <section className="grid-section-comment">
        <figure className="frase-container">
          <h1 data-aos="zoom-in" className="title oswald-title-comment">
            Nuestro Proposito
            {/* <span>
              <Icon className="star" icon="streamline:star-2-solid" />
            </span> */}
          </h1>
          <p data-aos="zoom-in" className="frase-p poppins-regular-italic">
            <span className="comillas">"</span>
            Nuestra mision es la excelencia y la aprobacion de nuestro cliente
            <span className="comillas">"</span>
          </p>
        </figure>
        <figure className="video-comment">
          <video src={VideoComponent} autoPlay loop muted></video>
        </figure>
      </section>
    </section>
  );
}

export default CommentGridSection;
