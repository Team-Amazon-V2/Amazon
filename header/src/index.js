import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.js";
import "./components/Header.css";
import "./components/Navbar.css";

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
