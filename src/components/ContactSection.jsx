import FormContactComponent from "./FormContactComponent";
import TitleSectionComponent from "./TitleSectionComponent";
import Logo from "/images/logo.png";
// import EartCanvas from "./PlanetComponent";
import "../css/contact-section.css";

function ContactSection() {
  return (
    <section className="contact-container">
      <div className="section-width">
        <TitleSectionComponent
          subtitle="Contactanos"
          title="No dudes en Contactarnos"
          parrafo="Nos encantaria poder escuchar tus ideas y que tenes en mente para brindarte nuestra ayuda y dar un salto de calidad en tu negocio y poder crecer juntos en el mundo del desarrollo web"
        />
      </div>
      <div className="grid-contact">
        <FormContactComponent />
        <figcaption>
          <img src={Logo} alt="Logo StakeDev" />
        </figcaption>
      </div>
    </section>
  );
}

export default ContactSection;
