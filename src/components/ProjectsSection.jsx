import "../css/portfolio-section.css";
import CardPortfolioComponent from "./CardPortfolioComponent";
import TitleSectionComponent from "./TitleSectionComponent";

function ProjectSection() {
  return (
    <section className="portfolio-container">
      <div className="section-width">
        <TitleSectionComponent
          subtitle="Portafolio"
          title="Nuestros Ultimos Trabajos"
          parrafo="Estamos orgullosos de presentar nuestros trabajos para que puedas ver como trabajamos y ver los estandares de nuestros proyectos y la calidad que vas a recibir si trabajas con nosotros, te mostramos diferentes modelos en el transcurso para lograr tu aprobacion final"
        />
      </div>
      <div className="grid-portfolio-container">
        <CardPortfolioComponent />
        <CardPortfolioComponent />
        <CardPortfolioComponent />
        <CardPortfolioComponent />
        <CardPortfolioComponent />
        <CardPortfolioComponent />
      </div>
    </section>
  );
}

export default ProjectSection;
