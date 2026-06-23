import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { DataProvider } from "@/context/DataContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
