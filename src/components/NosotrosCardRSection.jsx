import "../css/components-css/nosotros-card-r-section.css";
import VideoComponent from "/images/inicio-desk.mp4";

function NosotrosCardRSection() {
  return (
    <section className="section-width">
      <div className="card-reverse">
        <figure className="video-component-r">
          <video src={VideoComponent} loop muted autoPlay></video>
        </figure>
        <figure
        className="card-parrafo"
        >
          <div className="title-section-card">
            <h1 className="oswald-title-card-contact">NUESTROS VALORES.</h1>
            <p className="poppins-regular">
              Estamos aquí para acompañarte en cada etapa, desde la idea inicial
              hasta el despliegue final y más allá. En Stake Dev, no solo
              construimos sitios web; creamos experiencias digitales que
              impulsan tu negocio hacia el éxito
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default NosotrosCardRSection;
