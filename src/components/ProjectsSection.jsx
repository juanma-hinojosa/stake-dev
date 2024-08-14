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
          parrafo="Estamos orgullosos de presentarte nuestros proyectos recientes. Descubre la calidad y los altos estándares que aplicamos en cada trabajo. Te mostramos diversas propuestas durante el proceso, asegurando que el resultado final cumpla con tus expectativas y más"
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
