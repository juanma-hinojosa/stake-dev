/* eslint-disable react/prop-types */
function BannerComponent(props) {
  return (
    <section
      className="banner-container"
      style={{
        backgroundImage: `url(${props.banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "360px",
      }}
    ></section>
  );
}

export default BannerComponent;
