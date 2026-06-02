import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { Index } from "./routes/index";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container #root not found");
}

createRoot(container).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
