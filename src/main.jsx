import React from "react";
import ReactDOM from "react-dom/client";
import { LocationProvider } from "@reach/router";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LocationProvider>
      <App />
    </LocationProvider>
);
