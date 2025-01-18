// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import "../css/components-css/nosotros-card-r-section.css";
import VideoComponent from "/images/inicio-desk.mp4";

function NosotrosCardRSection() { 
  const listNumbers = [
    { titulo: "Clientes", inicio: 5, fin: 10 },
    { titulo: "Proyectos", inicio: 10, fin: 20 },
    { titulo: "Años de experiencia", inicio: 0, fin: 3 },
    // { titulo: "Titulos", inicio: 5, fin: 10},
  ];
  return (
    <section className="section-width">
      <div className="card-reverse">
        <figure className="video-component-r">
          <video src={VideoComponent} loop muted autoPlay></video>
        </figure>
        <figure className="card-parrafo">
          <div className="title-section-card">
            <h1 data-aos='zoom-in' className="oswald-title-card-contact">NUESTROS VALORES.</h1>
            <p data-aos='zoom-in' className="poppins-regular">
              Estamos aquí para acompañarte en cada etapa, desde la idea inicial
              hasta el despliegue final y más allá. En Stake Dev, no solo
              construimos sitios web; creamos experiencias digitales que
              impulsan tu negocio hacia el éxito
            </p>
          </div>
          <div style={{marginTop:'20px'}} className="grid-card-numbers poppins-regular">
            {listNumbers.map((cardsN, key) => (
              <div data-aos='fade-up' key={key} className="card-number">
                <p>
                  <h2>
                  <CountUp
                    start={cardsN.inicio}
                    end={cardsN.fin}
                    duration={5.0}
                    enableScrollSpy={false}
                  />+
                  </h2>
                  <span>{cardsN.titulo}</span>
                </p>
              </div>
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}

export default NosotrosCardRSection;
