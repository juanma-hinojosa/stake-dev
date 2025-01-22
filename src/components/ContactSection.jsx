import FormContactComponent from "./FormContactComponent";
import TitleSectionComponent from "./TitleSectionComponent";
// import Logo from "/images/logo.png";
// import EartCanvas from "./PlanetComponent";
import "../css/contact-section.css";

function ContactSection() {
  return (
    <section
     className="grid-contact"
    // className="section-width"
    >

      <div
      // className="section-width"
      >
        <TitleSectionComponent
          subtitle="Contactanos"
          title="Que proyecto tenes? Estamos animados de ayudarte"
          parrafo="Nos encantaría escuchar tus ideas y ayudarte a dar un salto de calidad en tu negocio. En un mundo cada vez más digital, tener una fuerte presencia en la web es esencial para el crecimiento. ¡Contáctanos! La consulta es totalmente gratuita y sin compromiso. Trabajemos juntos para asegurar que tu negocio destaque en línea"
        />
      </div>
      <FormContactComponent />
    </section>
  );
}

export default ContactSection;
