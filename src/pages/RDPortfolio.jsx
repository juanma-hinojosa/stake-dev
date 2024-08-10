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
      <section className="section-width">
        <TitleSectionComponent
          subtitle={cardPortfolio[id].category}
          title={cardPortfolio[id].title}
          parrafo={cardPortfolio[id].parrafo}
        />
      </section>

      <BannerComponent banner={cardPortfolio[id].banner} />
      <MobileSection
        resumenMobile={cardPortfolio[id].resumenMobile}
        resumenDesktop={cardPortfolio[id].resumenDesktop}
      />
      <ButtonComponent path="/portfolio" name="Volver" />
      <ContactSection />
    </section>
  );
}

export default RouteDinamicPortfolio;
