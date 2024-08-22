// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import "../css/components-css/nosotros-card-r-section.css";
import VideoComponent from "/images/inicio-desk.mp4";

function NosotrosCardRSection() {
  const listNumbers = [
    { titulo: "Clientes", inicio: 10, fin: 20 },
    { titulo: "Proyectos", inicio: 20, fin: 50 },
    { titulo: "Años de experiencia", inicio: 0, fin: 3 },
    { titulo: "Titulos", inicio: 5, fin: 10 },
  ];
  return (
    <section className="section-width">
      <div className="card-reverse">
        <figure className="video-component-r">
          <video src={VideoComponent} loop muted autoPlay></video>
        </figure>
        <figure className="card-parrafo">
          <div className="title-section-card">
            <h1 className="oswald-title-card-contact">NUESTROS VALORES.</h1>
            <p className="poppins-regular">
              Estamos aquí para acompañarte en cada etapa, desde la idea inicial
              hasta el despliegue final y más allá. En Stake Dev, no solo
              construimos sitios web; creamos experiencias digitales que
              impulsan tu negocio hacia el éxito
            </p>
          </div>
          <div className="grid-card-numbers poppins-regular">
            {listNumbers.map((cardsN, key) => (
              <div key={key} className="card-number">
                <p>
                  <h2>
                  <CountUp
                    start={cardsN.inicio}
                    end={cardsN.fin}
                    duration={5.0}
                    enableScrollSpy={true}
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
