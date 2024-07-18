import TitleSectionComponent from "./TitleSectionComponent";
// import EartCanvas from "./PlanetComponent";

function ContactSection() {
  return (
    <section>
      <div className="section-width">
        <TitleSectionComponent
          subtitle="Contactanos"
          title="No dudes en Contactarnos"
          parrafo="Nos encantaria poder escuchar tus ideas y que tenes en mente para brindarte nuestra ayuda y dar un salto de calidad en tu negocio y poder crecer juntos en el mundo del desarrollo web"
        />
      </div>
      {/* <EartCanvas /> */}

    </section>
  );
}

export default ContactSection;
