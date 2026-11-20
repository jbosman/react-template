import { StrictMode } from "react";
import reactDOM from "react-dom/client";
import App from "./App.jsx";

const container = document.getElementById("root");
const root = reactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
