/* eslint-disable react/prop-types */
import mobile from "/images/mockup-mobile-1.png";
import desktop from "/images/desktop-mockup.png";
import TitleSectionComponent from "./TitleSectionComponent";
import "../css/mobile-section.css";
function MobileSection(props) {
  return (
    <>
      <section className="mobile-container">
        <figure className="description-mobile">
          <TitleSectionComponent
            subtitle={props.type}
            title={props.resumen}
            parrafo={props.resumenMobile}
          />
        </figure>
        <figcaption>
          <img src={mobile} alt="mobile" />
        </figcaption>
      </section>
      <section className="mobile-container">
        <figcaption>
          <img src={desktop} alt="mobile" />
        </figcaption>
        <figure className="description-mobile">
          <TitleSectionComponent
            subtitle={props.type}
            title={props.resumen}
            parrafo={props.resumenMobile}
          />
        </figure>
      </section>
    </>
  );
}

export default MobileSection;
