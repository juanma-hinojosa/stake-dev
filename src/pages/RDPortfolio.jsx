/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
// import TitleSectionComponent from "../components/TitleSectionComponent";
import BannerComponent from "../components/BannerComponent";
import MobileSection from "../components/MobileSection";
import ButtonComponent from "../components/ButtonComponent";
import { TitleDinamic } from "../js/title-list";

function RouteDinamicPortfolio({ cardPortfolio }) {
  const { id } = useParams();
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

      <MobileSection
        resumenMobile={cardPortfolio[id].resumenMobile}
        type={cardPortfolio[id].type}
        imgDesk={cardPortfolio[id].imgDesk}
        title={cardPortfolio[id].title}
      />

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
