
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { HashRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
