import HeroVideoComponent from "../components/HeroVidComponent";
import TitleSectionComponent from "../components/TitleSectionComponent";
import video from "/images/video-contact.mp4";
function ContactPage() {
  return (
    <>
      {/* <HeroVideoComponent
        video={video}
        h1="CONTACTANOS"
        h2="CONTACTANOS H2"
        p="Soy un parrafo de relleno"
      /> */}
      <section>
        <TitleSectionComponent
          subtitle="CONTACTANOS"
          title="Comunicate con Nosotros"
          parrafo="Contactanos y hagamos crecer tu empresa"
        />
      </section>
    </>
  );
}

export default ContactPage;
