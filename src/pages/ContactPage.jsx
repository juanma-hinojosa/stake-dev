import { Typewriter } from "react-simple-typewriter";
import HeroVideoComponent from "../components/HeroVidComponent";
// import TitleSectionComponent from "../components/TitleSectionComponent";
// import video from "/images/video-contact.mp4";
import ContactSection from "../components/ContactSection";
import { TitleDinamic } from "../js/title-list";
import { useTranslation } from "react-i18next";
import translations from "../js/translations";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language || "es";

  const heroSection = translations[currentLang]?.contact?.heroSection || {};

  TitleDinamic(`${t("contact.title")} - Stake Dev`);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Contacanos - Stake Dev. Te invitamos a que entres en contacto con nosotros y nos cuente tus ideas"
        />
        <meta
          name="keywords"
          content="Contacto Soluciones digitales, creacion de branding, diseño web, desarrollo web. Lading Page, diseño institucional, apps y ecommerce"
        />
        <meta
          name="category"
          content="Stake Dev, empresa de soluciones digitales, creacion de branding, diseño web, desarrollo web. Lading Page, diseño institucional, apps y ecommerce"
        />
      </Helmet>
      {/* <section> */}
      <HeroVideoComponent
        video="https://i.imgur.com/y74jeI3.mp4"
        fraseUno={heroSection.fraseUno}
        spam={
          <Typewriter
            words={heroSection.words || []}
            loop={Infinity}
            cursor
            typeSpeed={120}
            deleteSpeed={80}
          />
        }
        fraseDos={heroSection.fraseDos}
        p={heroSection.p}
        name={heroSection.name}
        path="/portfolio"
      />
      <section
        style={{
          padding: "40px 0",
        }}
      >
        <ContactSection />
      </section>
      {/* </section> */}
    </>
  );
}

export default ContactPage;
