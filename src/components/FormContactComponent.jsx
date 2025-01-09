import { useRef } from "react";
import "../css/components-css/form-component.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
function FormContactComponent() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wun5tsk", "template_30r7rbf", form.current, {
        publicKey: "t0bcHqjEFkjaKf8Se",
      })
      .then(
        () => {
          toast.success('Mensaje enviado')
          // console.log("SUCCESS!");
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error('Error',error.text)
        }
      );
  };

  return (
    <section style={{ padding: "0 20px" }}>
      <form className="my-form poppins-regular" ref={form} onSubmit={sendEmail}>
        <label className="poppins-regular" htmlFor="name">
          Nombre:
        </label>
        <input
          className="poppins-regular"
          type="text"
          id="name"
          name="user_name"
          required
        />

        <label className="poppins-regular" htmlFor="email">
          Correo Electrónico:
        </label>
        <input
          className="poppins-regular"
          type="email"
          id="email"
          name="user_email"
          required
        />

        <label className="poppins-regular" htmlFor="message">
          Mensaje:
        </label>
        <textarea
          className="poppins-regular"
          id="message"
          name="message"
          rows="7"
          required
        ></textarea>

        <button type="submit" className="poppins-regular">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default FormContactComponent;
