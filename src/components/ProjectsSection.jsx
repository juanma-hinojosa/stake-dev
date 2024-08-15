import "../css/portfolio-section.css";
import { cardPortfolio } from "../js/list";
import CardPortfolioComponent from "./CardPortfolioComponent";
import TitleSectionComponent from "./TitleSectionComponent";

function ProjectSection() {
  return (
    <section className="portfolio-container">
      <div className="section-width">
        <TitleSectionComponent
          subtitle="Portafolio"
          title="Nuestros Últimos Trabajos"
          parrafo="Nos complace presentarte nuestros proyectos recientes. Descubre la calidad y los altos estándares que aplicamos en cada trabajo. Durante el proceso, te mostramos diversas propuestas para asegurarnos de que el resultado final no solo cumpla, sino que supere tus expectativas"
        />
      </div>
      <div className="grid-portfolio-container">
        {cardPortfolio.map((portfolio) => (
          <CardPortfolioComponent
            id={portfolio.id}
            key={portfolio.id}
            img={portfolio.img}
            title={portfolio.title}
            // parrafo={portfolio.parrafo}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
