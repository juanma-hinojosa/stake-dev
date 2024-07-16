import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NavbarComponentTwo from "./components/NavbarComponentTwo";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <NavbarComponentTwo />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
