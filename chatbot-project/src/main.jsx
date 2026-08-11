import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//this does same as:
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
