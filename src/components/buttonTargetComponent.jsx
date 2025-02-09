/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/components-css/button-target-component.css";

function ButtonTargetComponent(props) {
  return (
    <div className="button-target-wrapper" data-aos='fade-up'>
      <a className="button-target poppins-regular" href={props.link} target="_blank">
        <Icon icon="fluent:arrow-enter-16-filled" width="20" height="20" className="target-open" />
        {props.verSitio}
      </a>
    </div>
  );
}

export default ButtonTargetComponent;
