import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/components-css/section-card-contact.css";
import ButtonComponent from "./ButtonComponent";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";

function SectionCardContact() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";

  const sectionCardComponent =
    translations[currentLang]?.aboutUs?.sectionCardComponent || {};
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
            {sectionCardComponent.title}
            <span>
              <Icon className="star" icon="streamline:star-2-solid" />
            </span>
          </h1>
          <p className="poppins-regular">
          {sectionCardComponent.parrafo}
          </p>
        </div>
        <ButtonComponent path="/contact" name={sectionCardComponent.button} />
      </div>
    </section>
  );
}

export default SectionCardContact;
