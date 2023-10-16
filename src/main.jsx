import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "./scss/semantic-ui/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_pt from "./translations/pt/global.json";
import global_pt_bra from "./translations/pt-br/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    pt: {
      global: global_pt,
    },
    pt_bra: {
      global: global_pt_bra,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  /*   <React.StrictMode> */
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
  /*   </React.StrictMode>, */
);
