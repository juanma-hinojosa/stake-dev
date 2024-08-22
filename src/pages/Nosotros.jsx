import TitleSectionComponent from "../components/TitleSectionComponent";
import HeroVideoComponent from "../components/HeroVidComponent";
// import Video from "/images/video-nosotros.mp4";
import { Typewriter } from "react-simple-typewriter";
import SectionCardContact from "../components/SectionCardContact";
import CommentGridSection from "../components/CommentGridSection";
import NosotrosCardRSection from "../components/NosotrosCardRSection";

function NosotrosPage() {
  const img =
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const img = "https://images.unsplash.com/photo-1542762933-ab3502717ce7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const img = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <>
      <HeroVideoComponent
        video="https://i.imgur.com/5bCS1hW.mp4"
        fraseUno="Somos"
        spam={
          <Typewriter
            words={["Sowftare Developers", "Web Designers", "Stake Dev"]}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos="Conocenos"
        p="En Stake Dev, convertimos tus ideas en éxitos reales. Con un enfoque innovador y una dedicación constante, estamos aquí para ayudarte a alcanzar tus metas y superar todas tus expectativas"
        name="Contactanos"
        path="/contact"
      />
      <section>
        <section className="section-width">
          <TitleSectionComponent
            subtitle="NOSOTROS"
            title="Acerca de Nosotros"
          />
        </section>
        <section className="section-width">
          <p className="poppins-regular">
            Desde nuestros humildes comienzos, hemos crecido y evolucionado
            gracias a nuestra pasión y dedicación. Nuestra historia es un
            testimonio de innovación y perseverancia. Únete a nosotros para ser
            parte de un legado de éxito y progreso continuo
            <br />
            <br />
            En Stake Dev, somos un equipo apasionado por transformar ideas en
            éxitos digitales. Con un enfoque en la innovación y la dedicación
            constante, nos especializamos en desarrollo web, diseño UX/UI, y
            gestión de proyectos digitales. Cada proyecto es una oportunidad
            para crear soluciones personalizadas que superen las expectativas de
            nuestros clientes. <br /> <br />
            Nuestra filosofía se basa en la colaboración cercana, trabajando
            mano a mano contigo para entender tus necesidades y objetivos.
            Creemos en la importancia de cada detalle, asegurando que el
            producto final no solo cumpla con los más altos estándares de
            calidad, sino que también marque la diferencia en el competitivo
            mundo digital. <br />
            <br />
          </p>
        </section>
      </section>
      <div
        className="banner-img"
        style={{
          backgroundImage: `  
          linear-gradient(rgba(232, 23, 63, 0.9), rgba(159, 69, 86, 0.9)),
          url(${img})`,
          // backgroundColor: 'red',
          width: "100%",
          height: "60vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <section>
        <CommentGridSection />
      </section>
      <SectionCardContact />
      <section>
        <NosotrosCardRSection />
      </section>
    </>
  );
}

export default NosotrosPage;
