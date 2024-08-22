import { Typewriter } from "react-simple-typewriter";
import ContactSection from "../components/ContactSection";
// import HeroComponent from "../components/HeroComponent";
import ProjectSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import HeroVideoComponent from "../components/HeroVidComponent";
// import Video from '/images/inicio-desk.mp4'

function HomePage() {
  return (
    <>
      {/* <HeroComponent
        p="  Para la creacioln de tu sitio web escuchamos que tenes en mente y te ayudamos a transformar esa idea en realidad pixel por pixel"
        img="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        path="/portfolio"
        name="Trabajos"
        fraseUno="Desarollemos tu sitio web"
        // spam="increible"
        spam={
          <Typewriter
            words={["Increible", "Espectacular", "Unico"]}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="para tu negocio"
      /> */}
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
        padding: '40px 0'
      }}
      >
        <ContactSection />
      </section>
    </>
  );
}

export default HomePage;
