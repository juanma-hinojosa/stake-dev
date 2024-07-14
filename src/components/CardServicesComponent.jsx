import { Icon } from "@iconify/react/dist/iconify.js";
import '../css/components-css/card-services-component.css'
function CardServicesComponent() {
  return (
    <figure>
      <div className="icon-container">
        <Icon className="icon-services" icon="mdi:design" />
      </div>
      <h1 className="oswald-title-card">Titulo del servicio</h1>
      <p className="poppins-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        officiis voluptatem reprehenderit, minus quia tenetur! Iste, hic libero
      </p>
      <div className="link-icon-container">
        <Icon className="link-icon" icon="solar:map-arrow-up-bold" />
      </div>
    </figure>
  );
}

export default CardServicesComponent;
