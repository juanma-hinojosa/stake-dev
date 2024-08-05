/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import TitleSectionComponent from "../components/TitleSectionComponent";
import BannerComponent from "../components/BannerComponent";

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
      <Link to="/portfolio">Volver</Link>
    </section>
  );
}

export default RouteDinamicPortfolio;
