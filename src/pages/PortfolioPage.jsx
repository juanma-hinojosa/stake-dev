import { Typewriter } from "react-simple-typewriter";
import HeroVideoComponent from "../components/HeroVidComponent";
import ProjectSection from "../components/ProjectsSection";
import SectionCardContact from "../components/SectionCardContact";
import { TitleDinamic } from "../js/title-list";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";

function PortfolioPage() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "es";

  const heroSection = translations[currentLang]?.portfolio?.heroSection || {};

  // TitleDinamic("Trabajos - Stake Dev");
  TitleDinamic(`${t("portfolio.title")} - Stake Dev`);

  return (
    <>
      <HeroVideoComponent
        video="https://i.imgur.com/hYXZbGc.mp4"
        fraseUno={heroSection.fraseUno}
        spam={
          <Typewriter
            words={heroSection.words || []}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos={heroSection.fraseDos}
        p={heroSection.p}
        name={heroSection.name}
        path="/contact"
      />
      <ProjectSection />
      <section style={{ paddingTop: "50px" }}>
        <SectionCardContact />
      </section>
    </>
  );
}

export default PortfolioPage;
