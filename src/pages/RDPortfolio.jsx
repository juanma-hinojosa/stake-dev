/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TitleDinamic } from "../js/title-list";
import TitleSectionComponent from "../components/TitleSectionComponent";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/mobile-section.css";
import ButtonTargetComponent from "../components/buttonTargetComponent";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";

function RouteDinamicPortfolio() {
  const { projectName } = useParams();

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Busca el proyecto por su nombre en `cardPortfolio`
  // const project = cardPortfolio.find(
  //   (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === projectName
  // );

  // if (!project) {
  //   return <h1>Proyecto no encontrado</h1>;
  // }

  // const projects =
  //   translations[currentLang]?.cardPortfolio || translations.en.cardPortfolio;
  // const project = projects[id];

  // const lista = cardPortfolio[id].listDescription;

  const projects =
    translations[currentLang]?.cardPortfolio || translations.en.cardPortfolio;

  // Buscar el proyecto por el `title` convertido en slug
  const project = projects.find(
    (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === projectName
  );

  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  TitleDinamic(`${project.title} - Stake Dev`);
  return (
    <section
      style={{
        paddingBottom: "50px",
      }}
    >
      <BannerComponent banner={project.banner} />

      <div className="helper" style={{ height: "50px" }}></div>

      <section className="mobile-container">
        <figure className="description-mobile">
          <TitleSectionComponent
            subtitle={project.type}
            title={project.title}
            parrafo={project.parrafo}
          />
          <div className="list-container">
            {project.listDescription.map((item, index) => (
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
                  {item.titleDescripcion}
                </h2>
              </div>
            ))}
            <ButtonTargetComponent
              link={project.link}
              verSitio={t("rdPortfolio.verSitio")}
            />
          </div>
        </figure>

        <figcaption className="desk-project-container">
          <img data-aos="zoom-in" src={project.imgDesk} alt="desk" />
        </figcaption>
        <figcaption className="hero-project-container">
          <img data-aos="zoom-in" src={project.img} alt="hero" />
        </figcaption>
      </section>
      <div className="helper" style={{ height: "50px" }}></div>

      <section className="resumen-proyect-wrapper">
        <div className="section-width">
          <h1
            data-aos="fade-up"
            className="oswald-title title-resumen-proyect-wrapper"
          >
            {project.title}
          </h1>
          <h2
            data-aos="zoom-in"
            className="poppins-semibold info-resumen-proyect-wrapper"
          >
            {t("rdPortfolio.projectInfo")}
          </h2>
          <p
            data-aos="fade-up"
            className="poppins-regular resumen-resumen-proyect-wrapper"
          >
            {project.resumenMobile}
          </p>
        </div>
      </section>

      <section className="section-width">
        {project.listDescription.map((item, index) => (
          <div key={index} className="description-info-wrapper">
            <h2 className="poppins-semibold title-description-info-wrapper">
              {item.titleDescripcion}
            </h2>
            <p className="poppins-regular resumen-description-info-wrapper">
              {item.resumenDescripcion}
            </p>
            {item.imgDescripcion.map((img, index) => (
              <figure key={index} className="img-description-info-wrapper">
                <img
                  src={`/images/projects/${img}`}
                  alt={`${item.titleDescripcion} ${project.title}`}
                />
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
        <ButtonComponent path="/portfolio" name={t("rdPortfolio.back")} />
      </section>
    </section>
  );
}

export default RouteDinamicPortfolio;
