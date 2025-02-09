import TitleSectionComponent from "../components/TitleSectionComponent";
import HeroVideoComponent from "../components/HeroVidComponent";
// import Video from "/images/video-nosotros.mp4";
import { Typewriter } from "react-simple-typewriter";
import SectionCardContact from "../components/SectionCardContact";
import CommentGridSection from "../components/CommentGridSection";
import NosotrosCardRSection from "../components/NosotrosCardRSection";
import { TitleDinamic } from "../js/title-list";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";

function NosotrosPage() {
  // TitleDinamic("Nosotros - Stake Dev");
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "es";

  const heroSection = translations[currentLang]?.aboutUs?.heroSection || {};
  const nosotrosSection =
    translations[currentLang]?.aboutUs?.nosotrosSection || {};
  
    const img =
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const img = "https://images.unsplash.com/photo-1542762933-ab3502717ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const img = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  
  
  TitleDinamic(`${t("aboutUs.title")} - Stake Dev`);
  return (
    <>
      <HeroVideoComponent
        video="https://i.imgur.com/5bCS1hW.mp4"
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
      <section>
        <section className="section-width">
          <TitleSectionComponent
            subtitle={nosotrosSection.subtitle}
            title={nosotrosSection.title}
          />
        </section>
        <section className="section-width">
          <p className="poppins-regular">
            {nosotrosSection.parrafoUno}
            <br />
            <br />
            {nosotrosSection.parrafoDos}
            <br />
            <br />
          </p>
        </section>
      </section>
      <div
        className="banner-img"
        style={{
          backgroundImage: `  
          linear-gradient(rgba(232, 23, 63, 0.9), rgba(159, 69, 86, 0.9)),
          url(${img})`,
          // backgroundColor: 'red',
          width: "100%",
          height: "60vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <section>
        <CommentGridSection />
      </section>
      <SectionCardContact />
      <section>
        <NosotrosCardRSection />
      </section>
    </>
  );
}

export default NosotrosPage;
