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
          parrafo="Vamos cumplir tus expectativas y que no recurras a otras agencias para tus proyectos web"
        />
        <div className="services-grid-container">
          {cardServices.map((service) => (
            <CardServicesComponent key={service.id} 
            icon = {service.icon}
            title={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
