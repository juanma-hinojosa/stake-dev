import { Typewriter } from "react-simple-typewriter";
import HeroVideoComponent from "../components/HeroVidComponent";
// import TitleSectionComponent from "../components/TitleSectionComponent";
// import video from "/images/video-contact.mp4";
import ContactSection from "../components/ContactSection";
function ContactPage() {
  return (
    <>
      {/* <section> */}
      <HeroVideoComponent
        video="https://i.imgur.com/y74jeI3.mp4"
        fraseUno="Comencemos ahora,"
        spam={
          <Typewriter
            words={["Contactanos", "Trabajemos", "Construyamos"]}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="No Esperes mas"
        p="Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en lo que necesites y resolver cualquier duda que tengas"
        name="Trabajos"
        path="/portfolio"
      />
      {/* </section> */}
      {/* <section>
        <section className="section-width">
          <TitleSectionComponent
            subtitle="CONTACTANOS"
            title="Comunicate con Nosotros"
            parrafo="Contactanos y hagamos crecer tu empresa"
          />
        </section> */}

      <section
        style={{
          padding: "40px 0",
        }}
      >
        <ContactSection />
      </section>
      {/* </section> */}
    </>
  );
}

export default ContactPage;
