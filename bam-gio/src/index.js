import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

// Tìm phần tử DOM để render
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
