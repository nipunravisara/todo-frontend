import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/authContext";
import { SnackbarProvider } from "./context/snackbarContext";

import "./index.css";
import { TodoProvider } from "./context/todoContext";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <AuthProvider>
        <TodoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TodoProvider>
      </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
