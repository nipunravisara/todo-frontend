import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { loginUser, registerUser } from "../services/authServices";
import { useSnackbar } from "./snackbarContext";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const { setSnack } = useSnackbar();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();
  // register
  const register = async ({ name, email, password }) => {
    const response = await registerUser(name, email, password);
    if (response.success) {
      setLoggedIn(true);
      setUser(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      setSnack({
        open: true,
        message: response.message,
        severity: "success",
      });
      navigate("/login");
    } else {
      setSnack({
        open: true,
        message: response.message,
        severity: "error",
      });
    }
  };

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
      navigate("/");
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
    register,
    loggedIn,
    logout,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
