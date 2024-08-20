/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/components-css/section-grid-comment.css";
function CommentGridSection() {
  return (
    <section className="section-width">
      <section className="grid-section-comment">
        <figure className="frase-container">
          <h1 className="title oswald-title-comment">
            Nuestro Proposito
            <span>
              <Icon className="star" icon="streamline:star-2-solid" />
            </span>
          </h1>
          <p className="frase-p poppins-regular-italic">
            <span className="comillas">"</span>
            Nuestra mision es la excelencia y la aprobacion de nuestro cliente
            <span className="comillas">"</span>
          </p>
        </figure>
        <figure 
        className="video-comment"
        >
            <video src="https://videos.pexels.com/video-files/8774518/8774518-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
            ></video>
        </figure>
      </section>
    </section>
  );
}

export default CommentGridSection;
