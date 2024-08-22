import AccordionComponent from "../components/AcordeonComponent";
import HeroComponent from "../components/HeroComponent";
import TitleSectionComponent from "../components/TitleSectionComponent";
import "../css/preguntas-page.css";
import { preguntasList } from "../js/list";

function PreguntasFrecuentesPage() {
  return (
    <section className="preguntas-frecuentes-container">
      <HeroComponent img="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
              className="montserrat-subtitle"
              style={{ color: "var(--texto)", listStyle: "none" }}
            >
              {preguntasList.map((pregunta, key) => (
                <ul key={key}>
                  <a href={`#${pregunta.id}`}>{pregunta.titulo}</a>
                </ul>
              ))}
            </li>
          </aside>
          <section>
            {preguntasList.map((pregunta, key) => (
              <AccordionComponent
                key={key}
                id={pregunta.id}
                title={pregunta.pregunta}
                description={pregunta.respuesta}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

export default PreguntasFrecuentesPage;
