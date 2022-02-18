import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/authContext";
import { SnackbarProvider } from "./context/snackbarContext";

import { TodoProvider } from "./context/todoContext";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <AuthProvider>
          <TodoProvider>
            <App />
          </TodoProvider>
        </AuthProvider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
