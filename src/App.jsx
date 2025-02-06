import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NavbarComponentTwo from "./components/NavbarComponentTwo";
import PortfolioPage from "./pages/PortfolioPage";
import RouteDinamicPortfolio from "./pages/RDPortfolio";
import { cardPortfolio } from "./js/list";
import FooterComponent from "./components/FooterComponent";
import ServicesPage from "./pages/ServicesPage";
import NosotrosPage from "./pages/Nosotros";
import PreguntasFrecuentesPage from "./pages/AskPage";
import BasesPage from "./pages/BasesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/scrollToTop";
import { Toaster } from "react-hot-toast";


import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";

function App() {
  AOS.init({ once: true });

  return (
    <>
      {/* Colocammos todo dentro de la etiqueta suspense */}
      <I18nextProvider i18n={i18n}>
        <Router>
          <NavbarComponentTwo />
          <ScrollToTop />
          <Toaster
            position="top-center"
            containerClassName="poppins-regular"
            reverseOrder={true}
          />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route
              path="/portfolio/:id"
              element={<RouteDinamicPortfolio cardPortfolio={cardPortfolio} />}
            />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about-us" element={<NosotrosPage />} />
            <Route path="/ask-us" element={<PreguntasFrecuentesPage />} />
            <Route path="/bases" element={<BasesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <FooterComponent />
        </Router>
      </I18nextProvider>
    </>
  );
}

export default App;
