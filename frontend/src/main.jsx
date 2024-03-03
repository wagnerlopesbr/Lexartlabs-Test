import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import Global from "./components/styledComponents/Global/Global.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Global />
  </BrowserRouter>
);
