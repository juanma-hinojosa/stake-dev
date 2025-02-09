/* eslint-disable react/no-unescaped-entities */
// import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import "../css/components-css/section-grid-comment.css";
import VideoComponent from "/images/nosotros-component.mp4";
import translations from "../js/translations";
function CommentGridSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";

  const nuestroProposito =
    translations[currentLang]?.aboutUs?.nuestroProposito || {};

  return (
    <section className="section-width">
      <section className="grid-section-comment">
        <figure className="frase-container">
          <h1 data-aos="zoom-in" className="title oswald-title-comment">
            {nuestroProposito.title}
            {/* <span>
              <Icon className="star" icon="streamline:star-2-solid" />
            </span> */}
          </h1>
          <p data-aos="zoom-in" className="frase-p poppins-regular-italic">
            <span className="comillas">"</span>
            {nuestroProposito.parrafo}
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
