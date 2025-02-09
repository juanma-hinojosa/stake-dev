import { useTranslation } from "react-i18next";
import "../css/portfolio-section.css";
import { cardPortfolio } from "../js/list";
import CardPortfolioComponent from "./CardPortfolioComponent";
import TitleSectionComponent from "./TitleSectionComponent";
import translations from "../js/translations";

function ProjectSection() {
  // colocando traducciones
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";
  const projectsSection =
    translations[currentLang]?.home?.projectsSection || {};

  return (
    <section className="portfolio-container">
      <div className="section-width">
        <TitleSectionComponent
          subtitle={projectsSection.subtitle}
          title={projectsSection.title}
          parrafo={projectsSection.parrafo}
        />
      </div>
      <div className="grid-portfolio-container">
        {cardPortfolio.map((project) => (
          <CardPortfolioComponent
            id={project.id}
            to={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
            key={project.id}
            img={project.img}
            title={project.title}
            // parrafo={portfolio.parrafo}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
