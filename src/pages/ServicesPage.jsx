import { Typewriter } from "react-simple-typewriter";
import HeroComponent from "../components/HeroComponent";
import ServicesSection from "../components/ServicesSection";

function ServicesPage() {
  // const { text } = useTypewriter({
  //   words: ["Developers", "Desing", "Etc"],
  //   loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });

  return (
    <>
      <HeroComponent
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fraseUno="Somos"
        spam={
          <Typewriter
            words={["Stake Dev", "Developers", "Desings"]}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="Trabajemos Juntos"
        p="Conoce todos los servicios que te podemos ofrecer para hacer crecer tu empresa y tu presencia online"
        name="Contactanos"
        path="/contact"
      />
      <ServicesSection />
    </>
  );
}

export default ServicesPage;
