import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import ClientStore from "./store/ClientStore";
import { ScrollProvider } from "./utils/scrollcontext";

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      product: new ProductStore(),
      client: new ClientStore(),
    }}
  >
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </Context.Provider>
);
