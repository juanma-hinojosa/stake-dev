import ContactSection from "../components/ContactSection";
import HeroComponent from "../components/HeroComponent";
import ProjectSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";

function HomePage() {
  return (
    <>
      <HeroComponent />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
