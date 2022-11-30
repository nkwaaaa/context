import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./context/Store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // el componente store envuelve toda la aplicación como para poder acceder desde cualquier componente hijo
    <Store>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Store>
);
