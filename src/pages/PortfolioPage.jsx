import { Typewriter } from "react-simple-typewriter";
// import HeroComponent from "../components/HeroComponent";
import HeroVideoComponent from "../components/HeroVidComponent";
import ProjectSection from "../components/ProjectsSection";
// import Video from "/images/video-proyect.mp4";
import SectionCardContact from "../components/SectionCardContact";
import { TitleDinamic } from "../js/title-list";
// import TitleSectionComponent from "../components/TitleSectionComponent";

function PortfolioPage() {
  TitleDinamic('Trabajos - Stake Dev')
  return (
    <>
      <HeroVideoComponent
        video="https://i.imgur.com/hYXZbGc.mp4"
        p="Te invitamos a explorar todos los proyectos en los que hemos trabajado. Nos entusiasma que puedas ver el resultado de nuestro esfuerzo y dedicación"
        fraseUno="Contruyamos tus"
        spam={
          <Typewriter
            words={["Ideas", "Proyectos", "Diseños"]}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="para tu negocio"
        name="Contactanos"
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
