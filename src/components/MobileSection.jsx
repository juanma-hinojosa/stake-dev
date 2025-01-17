/* eslint-disable react/prop-types */
// import mobile from "/images/mockup-mobile-1.png";
// import desktop from "/images/desktop-mockup.png";
import TitleSectionComponent from "./TitleSectionComponent";
import "../css/mobile-section.css";
import { cardPortfolio } from "../js/list";
import { useParams } from "react-router-dom";
function MobileSection(props) {
  const { id } = useParams();


  const listDescription = cardPortfolio[id].listDescription;
  console.log(listDescription);

  return (
    <>
      <section className="mobile-container">
        <figure className="description-mobile">
          <TitleSectionComponent
            subtitle={props.type}
            title={props.title}
            parrafo={props.resumenMobile}
          />

          {listDescription.map((list, index) => {
            <div key={index}>
              <h2>{list.props}</h2>
            </div>;
          })}
        </figure>
        <figcaption className="desk-project-container">
          <img src={props.imgDesk} alt="desk" />
        </figcaption>
        <figcaption className="hero-project-container">
          <img src={props.img} alt="hero" />
        </figcaption>
      </section>
    </>
  );
}

export default MobileSection;
