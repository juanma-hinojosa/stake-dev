import { BrowserRouter, Route, Routes } from "react-router-dom";
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
//Importando archivos, lib y suspense
// import "./config/i18next.config";
// import { useTranslation } from "react-i18next";
// import { Suspense } from "react";

function App() {
  return (
    <>
        {/* Colocammos todo dentro de la etiqueta suspense */}
        <BrowserRouter>
          <NavbarComponentTwo />
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
        </BrowserRouter>
    </>
  );
}

export default App;
