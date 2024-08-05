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

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponentTwo />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<RouteDinamicPortfolio cardPortfolio={cardPortfolio} />} />          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
