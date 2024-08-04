import ContactSection from "../components/ContactSection";
import HeroComponent from "../components/HeroComponent";
import ProjectSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";

function HomePage() {
  return (
    <>
      <HeroComponent
        p="  Para la creacioln de tu sitio web escuchamos que tenes en mente y te ayudamos a transformar esa idea en realidad pixel por pixel"
        img="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
