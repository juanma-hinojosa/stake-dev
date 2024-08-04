/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../css/components-css/card-portfolio.css";
import { Icon } from "@iconify/react/dist/iconify.js";

function CardPortfolioComponent(props) {
  return (
    <figure className="card-container ">
      <figcaption className="img-porfolio-container">
        <img src={props.img} alt="" />
      </figcaption>

      <div className="info-container">
        <h1 className="oswald-title">{props.title}</h1>
        <Link className="link-id poppins-regular" to={`/portfolio/${props.id}`}>Ver Proyecto <Icon icon="eva:diagonal-arrow-right-up-fill" /></Link>
      </div>
    </figure>
  );
}

export default CardPortfolioComponent;
