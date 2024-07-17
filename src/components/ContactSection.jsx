import TitleSectionComponent from "./TitleSectionComponent";

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
    </section>
  );
}

export default ContactSection;
