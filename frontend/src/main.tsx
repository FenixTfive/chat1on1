// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

//strict mode intentionally cuases components to render twice in development mode
// this is to help identify side effects and ensure components are resilient to being mounted and unmounted
// it does not affect production builds
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
