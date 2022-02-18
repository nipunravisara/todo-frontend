import React, { createContext, useState, useEffect } from "react";
import { loginUser, refreshToken } from "../services/authServices";
import { useSnackbar } from "./snackbarContext";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const { setSnack } = useSnackbar();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // login
  const login = async ({ email, password }) => {
    const response = await loginUser(email, password);
    if (response.success) {
      setLoggedIn(true);
      setUser(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      setSnack({
        open: true,
        message: response.message,
        severity: "success",
      });
    } else {
      setSnack({
        open: true,
        message: response.message,
        severity: "error",
      });
    }
  };

  const logout = () => {};

  const authContextValue = {
    user,
    login,
    loggedIn,
    logout,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
