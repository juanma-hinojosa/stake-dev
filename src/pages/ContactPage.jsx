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
        spam="contactanos"
        fraseDos="para comenzar tu crecimiento"
        p='Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte en lo que necesites y resolver cualquier duda.'
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
