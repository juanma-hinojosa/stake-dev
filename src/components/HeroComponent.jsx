import "../css/hero-component.css";

function HeroComponent() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="hero-contain">
            <h1 className="oswald-title">
              Desarollemos tu sitio web <span>increible</span> para tu negocio
            </h1>
            <p className="poppins-light">
              Para la creacioln de tu sitio web escuchamos que tenes en mente y
              te ayudamos a transformar esa idea en realidad pixel por pixel
            </p>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
