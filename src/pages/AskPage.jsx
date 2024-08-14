import AccordionComponent from "../components/AcordeonComponent";
import TitleSectionComponent from "../components/TitleSectionComponent";
import '../css/preguntas-page.css'

function PreguntasFrecuentesPage() {
  return (
    <section className="preguntas-frecuentes-container">
      <section className="section-width">
        <TitleSectionComponent
          title="Preguntas Frecuentes"
          subtitle="PREGUNTAS"
          parrafo=""
        />
      </section>

      <section className="section-width">
        <section className="nav-preguntas-container">
          <aside>
            <li
            style={{color:'white', listStyle:'none'}}
            >
              <ul>Duda 1</ul>
              <ul>Duda 2</ul>
              <ul>Duda 3</ul>
              <ul>Duda 4</ul>
            </li>
          </aside>
          <section>
            <AccordionComponent
              title="Como comenzamos?"
              description="Contacte con nosotros por nuestros canales oficiales y en la brevedad marcamos una reunion"
            />
            <AccordionComponent
              title="Ya tengo una pagina con mi dominio?"
              description="Contacte con nosotros para gestionar una pagina nueva y mudar tu dominio"
            />
            <AccordionComponent
              title="Porque debo tener una pagina?"
              description="Esta demostrado que la presencia online aumenta la capicidad de ventas"
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default PreguntasFrecuentesPage;
