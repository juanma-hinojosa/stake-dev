import '../css/components-css/form-component.css'
function ContactFormSection() {
  return (
    <section>
      <form className="my-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactFormSection;
