import "../css/error.css";
import ButtonComponent from "../components/ButtonComponent";

function ErrorPage() {
  return (
    <section className="error-container">
      <div>
        <h2 className="oswald-title">404</h2>
        <h1 className="montserrat-subtitle">Error Pagina NO encontrada</h1>
        <p className="poppins-regular">
          No pudimos encontrar la ruta que buscas, queres volver al inicio?
        </p>
        <div className="container-link">
          <ButtonComponent path="/" name="Inicio" />
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
