/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import TitleSectionComponent from "../components/TitleSectionComponent";
import BannerComponent from "../components/BannerComponent";
import MobileSection from "../components/MobileSection";

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
      <Link to="/portfolio">Volver</Link>
    </section>
  );
}

export default RouteDinamicPortfolio;
