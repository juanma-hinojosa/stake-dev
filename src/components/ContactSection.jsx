import FormContactComponent from "./FormContactComponent";
import TitleSectionComponent from "./TitleSectionComponent";
import "../css/contact-section.css";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";

function ContactSection() {
  // configuracion traducciones

  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";
  const contactSection = translations[currentLang]?.home?.contactSection || {};

  return (
    <section className="grid-contact">
      <div>
        <TitleSectionComponent
          subtitle={contactSection.subtitle}
          title={contactSection.title}
          parrafo={contactSection.parrafo}
        />
      </div>
      <FormContactComponent />
    </section>
  );
}

export default ContactSection;
