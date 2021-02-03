import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import reportWebVitals from "./reportWebVitals";

// El componente App, recibirá el store de Redux a través del componente Provider.
import { Provider } from "react-redux";
// Importamos createStore() de Redux, para crear el store con nuestros reducers.
import { createStore, compose } from "redux";
// Importamos los reducers.
import reducers from "./reducers";

// Creamos una constante para utilizar la extensión "Redux DevTools" en Google Chrome.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creamos el store con los reducers y la extensión.
const store = createStore(
  reducers,
  composeEnhancers()
);

// Englobamos el componente App con el Provider y le pasamos el store como props.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
