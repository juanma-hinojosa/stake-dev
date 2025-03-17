import { Typewriter } from "react-simple-typewriter";
import HeroVideoComponent from "../components/HeroVidComponent";
import ProjectSection from "../components/ProjectsSection";
import SectionCardContact from "../components/SectionCardContact";
import { TitleDinamic } from "../js/title-list";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";
import { Helmet } from "react-helmet-async";

function PortfolioPage() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "es";

  const heroSection = translations[currentLang]?.portfolio?.heroSection || {};

  // TitleDinamic("Trabajos - Stake Dev");
  TitleDinamic(`${t("portfolio.title")} - Stake Dev`);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Trabajos - Stake Dev, nos enorgullese mostrar nuestros ultimos trabajos en soluciones digitales, creacion de branding, diseño web, desarrollo web. Lading Page, diseño institucional, apps y ecommerce"
        />
        <meta
          name="keywords"
          content="Trabajos, Soluciones digitales, creacion de branding, diseño web, desarrollo web. Lading Page, diseño institucional, apps y ecommerce"
        />
        <meta
          name="category"
          content="Stake Dev, empresa de soluciones digitales, creacion de branding, diseño web, desarrollo web. Lading Page, diseño institucional, apps y ecommerce"
        />
      </Helmet>
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
