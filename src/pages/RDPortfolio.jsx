/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TitleDinamic } from "../js/title-list";
import TitleSectionComponent from "../components/TitleSectionComponent";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/mobile-section.css";
import ButtonTargetComponent from "../components/buttonTargetComponent";

function RouteDinamicPortfolio({ cardPortfolio }) {
  const { id } = useParams();
  const lista = cardPortfolio[id].listDescription;

  TitleDinamic(`${cardPortfolio[id].title} - Stake Dev`);
  return (
    <section
      style={{
        paddingBottom: "50px",
      }}
    >
      <BannerComponent banner={cardPortfolio[id].banner} />

      <div className="helper" style={{ height: "50px" }}></div>

      <section className="mobile-container">
        <figure className="description-mobile">
          <TitleSectionComponent
            subtitle={cardPortfolio[id].type}
            title={cardPortfolio[id].title}
            parrafo={cardPortfolio[id].parrafo}
          />
          <div className="list-container">
            {lista.map((listaDesc, index) => (
              <div key={index} data-aos="fade-up">
                <h2 className="poppins-regular">
                  <span>
                    <Icon
                      className="star"
                      style={{ fontSize: "20px", marginRight: "5px" }}
                      icon="streamline:star-2-solid"
                    />
                  </span>
                  {""}
                  {listaDesc.titleDescripcion}
                </h2>
              </div>
            ))}
            <ButtonTargetComponent link={cardPortfolio[id].link} />
          </div>
        </figure>

        <figcaption className="desk-project-container">
          <img data-aos="zoom-in" src={cardPortfolio[id].imgDesk} alt="desk" />
        </figcaption>
        <figcaption className="hero-project-container">
          <img data-aos="zoom-in" src={cardPortfolio[id].img} alt="hero" />
        </figcaption>
      </section>
      <div className="helper" style={{ height: "50px" }}></div>

      <section className="resumen-proyect-wrapper">
        <div className="section-width">
          <h1 data-aos='fade-up' className="oswald-title title-resumen-proyect-wrapper">
            {cardPortfolio[id].title}
          </h1>
          <h2 data-aos='zoom-in' className="poppins-semibold info-resumen-proyect-wrapper">
            INFORMACION DEL PROYECTO
          </h2>
          <p data-aos='fade-up' className="poppins-regular resumen-resumen-proyect-wrapper">
            {cardPortfolio[id].resumenMobile}
          </p>
        </div>
      </section>

      <section className="section-width">
        {lista.map((listDesc, index) => (
          <div key={index} className="description-info-wrapper">
            <h2 className="poppins-semibold title-description-info-wrapper">{listDesc.titleDescripcion}</h2>
            <p className="poppins-regular resumen-description-info-wrapper">{listDesc.resumenDescripcion}</p>
            {listDesc.imgDescripcion.map((img, index) => (
              <figure key={index} className="img-description-info-wrapper">
                <img src={`/images/projects/${img}` } alt={`${listDesc.titleDescripcion} ${cardPortfolio[id].title}`} />
              </figure>
            ))}
          </div>
        ))}
      </section>

      <section
        className="section-width"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ButtonComponent path="/portfolio" name="Volver" />
      </section>
    </section>
  );
}

export default RouteDinamicPortfolio;
