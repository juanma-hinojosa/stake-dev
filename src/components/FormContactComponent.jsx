import "../css/components-css/form-component.css";

function FormContactComponent() {
  return (
    <section>
      <form className="my-form poppins-regular">
        <label className="poppins-regular" htmlFor="name">Nombre:</label>
        <input className="poppins-regular" type="text" id="name" name="name" required />

        <label className="poppins-regular" htmlFor="email">Correo Electrónico:</label>
        <input className="poppins-regular" type="email" id="email" name="email" required />

        <label className="poppins-regular" htmlFor="message">Mensaje:</label>
        <textarea className="poppins-regular" id="message" name="message" rows="4" required></textarea>

        <button type="submit" className="poppins-regular">Enviar</button>
      </form>
    </section>
  );
}

export default FormContactComponent;
