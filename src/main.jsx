import { LanguageProvider } from "@/lib/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "@/context/DataContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider><LanguageProvider>
        <App />
      </LanguageProvider></DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
