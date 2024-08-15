/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import TitleSectionComponent from "../components/TitleSectionComponent";
import BannerComponent from "../components/BannerComponent";
import MobileSection from "../components/MobileSection";
import ContactSection from "../components/ContactSection";
import ButtonComponent from "../components/ButtonComponent";

function RouteDinamicPortfolio({ cardPortfolio }) {
  const { id } = useParams();

  return (
    <section>
      <BannerComponent banner={cardPortfolio[id].banner} />
      <section className="section-width">
        <TitleSectionComponent
          subtitle={cardPortfolio[id].category}
          title={cardPortfolio[id].title}
          parrafo={cardPortfolio[id].parrafo}
        />
      </section>
      <MobileSection
        resumenMobile={cardPortfolio[id].resumenMobile}
        resumenDesktop={cardPortfolio[id].resumenDesktop}
      />

      <section className="section-width">
        <ButtonComponent path="/portfolio" name="Volver" />
      </section>
    </section>
  );
}

export default RouteDinamicPortfolio;
