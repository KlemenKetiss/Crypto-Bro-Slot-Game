import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const appRoot = document.getElementById("app");

if (!appRoot) {
  throw new Error("App root element not found.");
}

const root = createRoot(appRoot);

root.render(
  <React.StrictMode>
    <main className="app-shell">
      <h1>Crypto Bro Slot Game</h1>
    </main>
  </React.StrictMode>,
);
