/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../css/components-css/card-portfolio.css";

function CardPortfolioComponent(props) {
  return (
    <figure className="card-container ">
      <figcaption className="img-porfolio-container">
        <img src={props.img} alt="" />
      </figcaption>

      <div className="info-container">
        <div className="tecnologia-list montserrat-subtitle">
          <h2 className="tecnologia">#ReactJS</h2>
          <h2 className="tecnologia">#MongoDB</h2>
          <h2 className="tecnologia">#API Spotify</h2>
        </div>

        <h1 className="oswald-title">{props.title}</h1>
        <p className="poppins-regular">{props.parrafo}</p>
        <Link to='/'>Ver Proyecto</Link>
      </div>
    </figure>
  );
}

export default CardPortfolioComponent;
