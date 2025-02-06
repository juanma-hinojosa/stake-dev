import { Typewriter } from "react-simple-typewriter";
import ContactSection from "../components/ContactSection";
// import HeroComponent from "../components/HeroComponent";
import ProjectSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import HeroVideoComponent from "../components/HeroVidComponent";
import { TitleDinamic } from "../js/title-list";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";
// import Video from '/images/inicio-desk.mp4'

function HomePage() {
  TitleDinamic("Stake Dev");

  const { i18n } = useTranslation();
  const currentLang = i18n.language || "es";

  // Extraccion de datos parar la traduccion
  const heroSection = translations[currentLang]?.home?.heroSection || {};

  return (
    <>
      <HeroVideoComponent
        fraseUno={heroSection.fraseUno}
        video="https://i.imgur.com/lyNaU6V.mp4"
        spam={
          <Typewriter
            words={heroSection.words || []}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos={heroSection.fraseDos} // Traducción dinámica
        p={heroSection.p} // Traducción dinámica
        path="/contact"
        name={heroSection.name} // Traducción dinámica
      />
      <ServicesSection />
      <ProjectSection />
      <section
        style={{
          padding: "40px 0",
        }}
      >
        <ContactSection />
      </section>
    </>
  );
}

export default HomePage;
