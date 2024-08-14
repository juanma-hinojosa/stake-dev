import "../css/services-section.css";
import { cardServices } from "../js/list";
import CardServicesComponent from "./CardServicesComponent";
import TitleSectionComponent from "./TitleSectionComponent";

function ServicesSection() {
  return (
    <section>
      <div className="section-width">
        <TitleSectionComponent
          subtitle="Servicios"
          title="Alcanzando tus expectativas"
          parrafo="Cumplimos con tus necesidades para que no tengas que buscar en otra parte. Confía en nosotros para tus proyectos web y obtén resultados que superen tus expectativas"
        />
        <div className="services-grid-container">
          {cardServices.map((service) => (
            <CardServicesComponent
              key={service.id}
              icon={service.icon}
              title={service.title}
              parrafo={service.parrafo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
