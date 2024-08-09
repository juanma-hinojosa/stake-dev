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
      <TitleSectionComponent
        subtitle={cardPortfolio[id].category}
        title={cardPortfolio[id].title}
        parrafo={cardPortfolio[id].parrafo}
      />
      <BannerComponent banner={cardPortfolio[id].banner} />
      <MobileSection
        type={cardPortfolio[id].type}
        resumen={cardPortfolio[id].resumen}
        resumenMobile={cardPortfolio[id].resumenMobile}
      />
      <ButtonComponent path="/portfolio" name="Volver" />
      <ContactSection />
    </section>
  );
}

export default RouteDinamicPortfolio;
