import { Link } from "react-router-dom";
import "../css/components-css/card-portfolio.css";

function CardPortfolioComponent() {
  return (
    <figure className="card-container ">
      <figcaption className="img-porfolio-container">
        <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </figcaption>

      <div className="info-container">
        <div className="tecnologia-list montserrat-subtitle">
          <h2 className="tecnologia">#ReactJS</h2>
          <h2 className="tecnologia">#MongoDB</h2>
          <h2 className="tecnologia">#API Spotify</h2>
        </div>

        <h1 className="oswald-title">Nombre Sitio Web</h1>
        <p className="poppins-regular">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, voluptatum?</p>
        <Link to='/'>Ver Proyecto</Link>
      </div>
    </figure>
  );
}

export default CardPortfolioComponent;
