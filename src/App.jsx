import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NavbarComponentTwo from "./components/NavbarComponentTwo";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponentTwo />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
