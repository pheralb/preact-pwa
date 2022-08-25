import { render } from "preact";

// Styles =>
import "@/styles/global.css";

// App =>
import App from "./app";

// React Router config =>
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app") as HTMLElement
);
