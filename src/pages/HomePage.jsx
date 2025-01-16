import { Typewriter } from "react-simple-typewriter";
import ContactSection from "../components/ContactSection";
// import HeroComponent from "../components/HeroComponent";
import ProjectSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import HeroVideoComponent from "../components/HeroVidComponent";
import { TitleDinamic } from "../js/title-list";
// import Video from '/images/inicio-desk.mp4'

function HomePage() {
  TitleDinamic("Stake Dev");
  return (
    <>
      <HeroVideoComponent
        fraseUno="Desarollemos tu pagina"
        video="https://i.imgur.com/lyNaU6V.mp4"
        spam={
          <Typewriter
            words={["Unica", "Personalizada", "Hecha a Medida"]}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="para tu negocio"
        p="Para la creación de tu sitio web, escuchamos atentamente tus ideas y te ayudamos a transformarlas en realidad, pixel a pixel"
        path="/contact"
        name="Contactanos"
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
