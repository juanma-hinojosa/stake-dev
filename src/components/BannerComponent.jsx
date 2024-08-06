/* eslint-disable react/prop-types */
import '../css/components-css/banner-component.css'
function BannerComponent(props) {
  return (
    <section
      className="banner-container"
      style={{
        backgroundImage: `url(${props.banner})`,
      }}
    ></section>
  );
}

export default BannerComponent;
