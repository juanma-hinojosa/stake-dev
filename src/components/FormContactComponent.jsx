import { useRef } from "react";
import "../css/components-css/form-component.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

function FormContactComponent() {
  const captcha = useRef(null);
  function onChange() {
    console.log(captcha.current.getValue());
  }

  function SetInputs() {
    const btnClear = document.querySelector("button");
    const inputs = document.querySelectorAll(".set-field");

    btnClear.addEventListener("click", () => {
      inputs.forEach((input) => (input.value = ""));
    });
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wun5tsk", "template_30r7rbf", form.current, {
        // publicKey: "",
        publicKey: "t0bcHqjEFkjaKf8Se",
      })
      .then(
        () => {
          toast.success("Mensaje enviado");
          // console.log("SUCCESS!");
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("Error", error.text);
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
          className="poppins-regular set-field"
          type="text"
          id="name"
          name="user_name"
          placeholder="Tu nombre"
          required
        />

        <label className="poppins-regular" htmlFor="phone">
          Telefono:
        </label>
        <input
          className="poppins-regular set-field"
          type="number"
          id="number"
          name="user_phone"
          placeholder="Tu telefono"
          // required
        />

        <label className="poppins-regular" htmlFor="email">
          Correo Electrónico:
        </label>
        <input
          className="poppins-regular set-field"
          type="email"
          id="email"
          name="user_email"
          placeholder="Tu email"
          required
        />

        <label className="poppins-regular" htmlFor="message">
          Mensaje:
        </label>
        <textarea
          className="poppins-regular set-field"
          id="message"
          name="message"
          rows="7"
          placeholder="Dejanos tu consulta"
          required
        ></textarea>

        <ReCAPTCHA
          ref={captcha}
          sitekey="6LfwCrMqAAAAADQ_nF4jyFEtMQIxS3gvasmKnVcg"
          onChange={onChange}
        />

        <button onClick={SetInputs} type="submit" className="poppins-regular">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default FormContactComponent;
