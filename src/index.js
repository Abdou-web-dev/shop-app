import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'
import reportWebVitals from "./reportWebVitals";

//fonts
import "@fontsource/karla"; // Defaults to weight 400.
import "@fontsource/work-sans"
import "@fontsource/montserrat"
import "@fontsource/mulish"
import "@fontsource/quicksand"
import "@fontsource/roboto"
import "@fontsource/poppins"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();

