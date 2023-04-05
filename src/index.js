import React from "react";
import ReactDOM from "react-dom/client";
import "../src/style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import Logement from "./Pages/Logement";
import imgFooter from "./assets/images/logo-footer.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer imgFooter={imgFooter} />
    </BrowserRouter>
  </React.StrictMode>
);
