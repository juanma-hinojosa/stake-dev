/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../css/components-css/button-component.css";
function ButtonComponent(props) {
  return (
    <div className="link-button-component">
      <Link className="button poppins-regular" to={props.path} >
        {props.name}
      </Link>
    </div>
  );
}

export default ButtonComponent;
