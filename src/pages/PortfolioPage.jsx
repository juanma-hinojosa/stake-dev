import { Typewriter } from "react-simple-typewriter";
import ContactSection from "../components/ContactSection";
// import HeroComponent from "../components/HeroComponent";
import HeroVideoComponent from "../components/HeroVidComponent";
import ProjectSection from "../components/ProjectsSection";
import Video from "/images/video-proyect.mp4";
// import TitleSectionComponent from "../components/TitleSectionComponent";

function PortfolioPage() {
  return (
    <>
      {/* <HeroComponent
        img="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Te invitamos a que veas todos los proyectos en los que trabajamos y nos sentimos orgullosos que veas"
        path="/contact"
        name="Contactanos"
        fraseUno="Contruyamos tus"
        spam="proyectos"
        fraseDos="para tu negocio"
      /> */}
      <HeroVideoComponent
        video={Video}
        p="Te invitamos a que veas todos los proyectos en los que trabajamos y nos sentimos orgullosos que veas"
        fraseUno="Contruyamos tus"
        // spam="proyectos"
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
      />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default PortfolioPage;
