import ContactSection from "../components/ContactSection";
import HeroComponent from "../components/HeroComponent";
import TitleSectionComponent from "../components/TitleSectionComponent";

function NosotrosPage() {
  return (
    <>
      <HeroComponent       
      img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      fraseUno='Te esperamos,'
      spam='nosotros'
      fraseDos='te vamos a hacer crecer'
      p="En Stake Dev, transformamos tus ideas en éxitos. Con nuestro enfoque innovador y dedicación, estamos aquí para ayudarte a alcanzar tus metas y superar tus expectativas"
    //   p="¡Contactate con nosotros y descubre un mundo de oportunidades! Estamos aquí para escucharte y ofrecerte soluciones a medida. ¡Tu satisfacción es nuestra misión!"

      path='/contact'
      name='Contactanos' 
      />
      <section>
        <TitleSectionComponent 
        subtitle='NOSOTROS'
        title='Como comenzamos'
        parrafo='Desde nuestros humildes comienzos, hemos crecido y evolucionado gracias a nuestra pasión y dedicación. Nuestra historia es un testimonio de innovación y perseverancia. Únete a nosotros para ser parte de un legado de éxito y progreso continuo.'
        />
      </section>
      <ContactSection />
    </>
  );
}

export default NosotrosPage;
