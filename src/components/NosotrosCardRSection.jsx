// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import "../css/components-css/nosotros-card-r-section.css";
import VideoComponent from "/images/inicio-desk.mp4";
import { useTranslation } from "react-i18next";

function NosotrosCardRSection() {
  const { t } = useTranslation();
  // Obtener los valores traducidos desde i18n
  const nuestrosValores = t("aboutUs.nuestrosValores", { returnObjects: true }); // const nuestrosValores =

  return (
    <section className="section-width">
      <div className="card-reverse">
        <figure className="video-component-r">
          <video src={VideoComponent} loop muted autoPlay></video>
        </figure>
        <figure className="card-parrafo">
          <div className="title-section-card">
            <h1 data-aos="zoom-in" className="oswald-title-card-contact">
              {nuestrosValores?.title}
            </h1>
            <p data-aos="zoom-in" className="poppins-regular">
              {nuestrosValores?.parrafo}
            </p>
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="grid-card-numbers poppins-regular"
          >
            {nuestrosValores?.listNumbers?.map((cardsN, key) => (
              <div key={key} className="card-number">
                <p>
                  <h2>
                    <CountUp
                      start={cardsN.inicio}
                      end={cardsN.fin}
                      duration={5.0}
                      enableScrollSpy={false}
                    />
                    +
                  </h2>
                  <span>{cardsN.titulo}</span>
                </p>
              </div>
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}

export default NosotrosCardRSection;
