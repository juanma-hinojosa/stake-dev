/* eslint-disable react/prop-types */
// import './Accordion.css'; 
// Asegúrate de crear este archivo para los estilos
import '../css/components-css/acordeon-component.css'
import { useState } from "react";

function AccordionComponent (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{props.title}</h2>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default AccordionComponent;
