import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RelatedProducts from "./App";

const root = ReactDOM.createRoot(document.getElementById("people-also-bought"));
root.render(
   <React.StrictMode>
      <RelatedProducts />
   </React.StrictMode>
);
