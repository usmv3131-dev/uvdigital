
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.documentElement;
if (rootElement) {
  rootElement.lang = "ru";
  rootElement.setAttribute("data-theme", rootElement.getAttribute("data-theme") ?? "light");
  rootElement.setAttribute("data-color-mode", rootElement.getAttribute("data-color-mode") ?? "light");
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
  
