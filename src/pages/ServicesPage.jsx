import HeroComponent from "../components/HeroComponent";
import ServicesSection from "../components/ServicesSection";

function ServicesPage() {
  return (
    <>
      <HeroComponent
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        p="Conoce todos los servicios que te podemos ofrecer para hacer crecer tu empresa y tu presencia online"
      />
      <ServicesSection />
    </>
  );
}

export default ServicesPage;
