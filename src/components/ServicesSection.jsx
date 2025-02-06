import "../css/services-section.css";
// import { cardServices } from "../js/list";
import CardServicesComponent from "./CardServicesComponent";
import TitleSectionComponent from "./TitleSectionComponent";
import translations from "../js/translations";
import { useTranslation } from "react-i18next";

function ServicesSection() {
  // console.log(translations);
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";
  const cardServices = translations[currentLang]?.cardServices || [];
  const servicesSection = translations[currentLang]?.home?.servicesSection || {};
  
  return (
    <section>
      <div className="section-width">
        <TitleSectionComponent
          // subtitle="Servicios"
          // title="Alcanzando tus expectativas"
          // parrafo="Cumplimos con tus necesidades para que no tengas que buscar en otra parte. Confía en nosotros para tus proyectos web y obtén resultados que superen tus expectativas"
        
          subtitle={servicesSection.subtitle}  // Ahora usa la traducción
          title={servicesSection.title}        // Ahora usa la traducción
          parrafo={servicesSection.parrafo}    // Ahora usa la traducción
        />
        <div className="services-grid-container">
          {cardServices.map((service) => (
            <CardServicesComponent
              key={service.id}
              icon={service.icon}
              title={service.title}
              parrafo={service.parrafo}
            />
          ))}
          {/* {translations.map((service) => (
            <CardServicesComponent
              key={service.t('id')}
              icon={service.t('icon')}
              title={service.t('title')}
              parrafo={service.t('parrafo')}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
