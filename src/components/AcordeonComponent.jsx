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
    <div className="accordion" id={props.id}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2
        className='oswald-title-uno'
        >{props.title}</h2>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p
        className='poppins-regular'
        >{props.description}</p>
      </div>
    </div>
  );
}

export default AccordionComponent;
