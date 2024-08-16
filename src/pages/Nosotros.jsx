import TitleSectionComponent from "../components/TitleSectionComponent";
import HeroVideoComponent from "../components/HeroVidComponent";
// import Video from "/images/video-nosotros.mp4";
import { Typewriter } from "react-simple-typewriter";
import SectionCardContact from "../components/SectionCardContact";

function NosotrosPage() {
  return (
    <>
      {/* <HeroComponent
        img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fraseUno="Te esperamos,"
        spam="nosotros"
        fraseDos="te vamos a hacer crecer"
        p="En Stake Dev, transformamos tus ideas en éxitos. Con nuestro enfoque innovador y dedicación, estamos aquí para ayudarte a alcanzar tus metas y superar tus expectativas"
        //   p="¡Contactate con nosotros y descubre un mundo de oportunidades! Estamos aquí para escucharte y ofrecerte soluciones a medida. ¡Tu satisfacción es nuestra misión!"
        path="/contact"
        name="Contactanos"
      /> */}
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
            parrafo="Desde nuestros humildes comienzos, hemos crecido y evolucionado gracias a nuestra pasión y dedicación. Nuestra historia es un testimonio de innovación y perseverancia. Únete a nosotros para ser parte de un legado de éxito y progreso continuo"
          />
        </section>
        <section className="section-width">
          <p className="poppins-regular">
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
            Estamos aquí para acompañarte en cada etapa, desde la idea inicial
            hasta el despliegue final y más allá. En Stake Dev, no solo
            construimos sitios web; creamos experiencias digitales que impulsan
            tu negocio hacia el éxito.”
          </p>
        </section>
      </section>
      <SectionCardContact />
    </>
  );
}

export default NosotrosPage;
