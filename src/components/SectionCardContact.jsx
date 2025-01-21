import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/components-css/section-card-contact.css";
import ButtonComponent from "./ButtonComponent";

function SectionCardContact() {
  return (
    <section
      style={{
        backgroundColor: "var(--texto)",
        padding: "40px 10px",
      }}
    >
      <div
        className="section-card-contact-container section-width"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="title-section-card">
          <h1 className="oswald-title-card-contact">
            Comenzemos a trabajar en tu proximo proyecto juntos
            <span>
              <Icon className="star" icon="streamline:star-2-solid" />
            </span>
          </h1>
          <p className="poppins-regular">
            Unimos creatividad, innovación y tecnología para construir una
            sólida presencia digital que destaque en el mundo online. Al
            trabajar juntos, transformamos tus ideas en soluciones web
            personalizadas, efectivas y adaptadas a tus necesidades. Comencemos
            a crear experiencias digitales únicas que impulsen tu éxito
          </p>
        </div>
        <ButtonComponent path="/contact" name="Contactanos" />
      </div>
    </section>
  );
}

export default SectionCardContact;
