import '../css/services-section.css'
import CardServicesComponent from './CardServicesComponent';
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
            <CardServicesComponent />
            <CardServicesComponent />
            <CardServicesComponent />
            <CardServicesComponent />
            <CardServicesComponent />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
