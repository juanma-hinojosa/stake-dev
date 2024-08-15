/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import '../css/components-css/card-services-component.css'
function CardServicesComponent(props) {
  return (
    <figure className="card-services">
      <div className="icon-container">
        <Icon className="icon-services" icon={props.icon} />
      </div>
      <h1 className="oswald-title-card">{props.title}</h1>
      <p className="poppins-semibold">
      {props.parrafo}
      </p>
      {/*
      <div className="link-icon-container">
        <Icon className="link-icon" icon="solar:map-arrow-up-bold" />
      </div>
      */}
      
    </figure>
  );
}

export default CardServicesComponent;
