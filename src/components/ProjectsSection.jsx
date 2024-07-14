import TitleSectionComponent from "./TitleSectionComponent";

function ProjectSection() {
  return (
    <section>
      <div className="section-width">
        <TitleSectionComponent
          subtitle="Portafolio"
          title="Nuestros Ultimos Trabajos"
          parrafo="Estamos orgullosos de presentar nuestros trabajos para que puedas ver como trabajamos y ver los estandares de nuestros proyectos y la calidad que vas a recibir si trabajas con nosotros, te mostramos diferentes modelos en el transcurso para lograr tu aprobacion final"
        />
      </div>
    </section>
  );
}

export default ProjectSection;
