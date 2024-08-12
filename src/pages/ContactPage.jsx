import { Typewriter } from "react-simple-typewriter";
import HeroVideoComponent from "../components/HeroVidComponent";
import TitleSectionComponent from "../components/TitleSectionComponent";
import video from "/images/video-contact.mp4";
function ContactPage() {
  return (
    <>
      {/* <section> */}
      <HeroVideoComponent
        video={video}
        fraseUno="Comencemos ahora,"
        spam={
          <Typewriter
            words={["Contactanos", "Trabajemos", 'Construyamos']}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="No Esperes mas"
        p='Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte en lo que necesites y resolver cualquier duda.'
        name='Trabajos'
        path='/portfolio'
      />
      {/* </section> */}
      <section>
        <section className="section-width">
          <TitleSectionComponent
            subtitle="CONTACTANOS"
            title="Comunicate con Nosotros"
            parrafo="Contactanos y hagamos crecer tu empresa"
          />
        </section>
      </section>
    </>
  );
}

export default ContactPage;
