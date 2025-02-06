import { useRef } from "react";
import "../css/components-css/form-component.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

function FormContactComponent() {
  const { t } = useTranslation(); // Hook para obtener traducciones

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
          toast.success(t("formComponent.success")); // Mensaje traducido          // console.log("SUCCESS!");
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error(`${t("formComponent.error")}: ${error.text}`); // Mensaje traducido con el error
        }
      );
  };

  return (
    <section style={{ padding: "0 20px" }}>
      <form className="my-form poppins-regular" ref={form} onSubmit={sendEmail}>
        <label className="poppins-regular" htmlFor="name">
          {t("formComponent.labelNombre")}
        </label>
        <input
          className="poppins-regular set-field"
          type="text"
          id="name"
          name="user_name"
          placeholder={t("formComponent.placeHolderNombre")}
          required
        />

        <label className="poppins-regular" htmlFor="phone">
          {t("formComponent.labelTelefono")}
        </label>
        <input
          className="poppins-regular set-field"
          type="number"
          id="number"
          name="user_phone"
          placeholder={t("formComponent.placeHolderTelefono")}
          required
        />

        <label className="poppins-regular" htmlFor="email">
          {t("formComponent.labelCorreo")}
        </label>
        <input
          className="poppins-regular set-field"
          type="email"
          id="email"
          name="user_email"
          placeholder={t("formComponent.placeHolderCorreo")}
          required
        />

        <label className="poppins-regular" htmlFor="message">
          {t("formComponent.labelMensaje")}
        </label>
        <textarea
          className="poppins-regular set-field"
          id="message"
          name="message"
          rows="7"
          placeholder={t("formComponent.placeHolderMensaje")}
          required
        ></textarea>

        <ReCAPTCHA
          ref={captcha}
          sitekey="6LfwCrMqAAAAADQ_nF4jyFEtMQIxS3gvasmKnVcg"
          onChange={onChange}
        />

        <button onClick={SetInputs} type="submit" className="poppins-regular">
          {t("formComponent.button")}
        </button>
      </form>
    </section>
  );
}

export default FormContactComponent;
