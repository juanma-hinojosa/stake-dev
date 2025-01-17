/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
// import TitleSectionComponent from "../components/TitleSectionComponent";
import BannerComponent from "../components/BannerComponent";
// import MobileSection from "../components/MobileSection";
import ButtonComponent from "../components/ButtonComponent";
import { TitleDinamic } from "../js/title-list";
import TitleSectionComponent from "../components/TitleSectionComponent";
import { Icon } from "@iconify/react/dist/iconify.js";
import '../css/mobile-section.css'

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
      {/* <section className="section-width">
        <TitleSectionComponent
          subtitle={cardPortfolio[id].category}
          title={cardPortfolio[id].title}
          parrafo={cardPortfolio[id].parrafo}
        />
      </section> */}

      <div className="helper" style={{ height: "50px" }}></div>

      {/* <MobileSection
        resumenMobile={cardPortfolio[id].resumenMobile}
        type={cardPortfolio[id].type}
        imgDesk={cardPortfolio[id].imgDesk}
        img={cardPortfolio[id].img}
        title={cardPortfolio[id].title}
        list={cardPortfolio[id].listDescription}
      /> */}

      <section className="mobile-container">
        <figure className="description-mobile">
          <TitleSectionComponent
            subtitle={cardPortfolio[id].type}
            title={cardPortfolio[id].title}
            parrafo={cardPortfolio[id].resumenMobile}
          />
          {lista.map((listaDesc, index) => (
            <div key={index} data-aos='fade-up'>
              <h2 className="poppins-regular">
                <span>
                  <Icon
                    className="star"
                    style={{ fontSize: "20px" }}
                    icon="streamline:star-2-solid"
                  />
                </span>{" "}
                {listaDesc}
              </h2>
            </div>
          ))}
        </figure>
        <figcaption className="desk-project-container">
          <img data-aos='zoom-in' src={cardPortfolio[id].imgDesk} alt="desk" />
        </figcaption>
        <figcaption className="hero-project-container">
          <img data-aos='zoom-in' src={cardPortfolio[id].img} alt="hero" />
        </figcaption>
      </section>
      <div className="helper" style={{ height: "50px" }}></div>

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
