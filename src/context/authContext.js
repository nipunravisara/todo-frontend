import React, { createContext, useState, useEffect } from "react";
import { loginUser, refreshToken } from "../services/authServices";
import { useSnackbar } from "./snackbarContext";
import { useCookies } from "react-cookie";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  const { setSnack } = useSnackbar();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // const refresh = async () => {
  //   const response = await refreshToken();

  //   if (response.success) {
  //     setLoggedIn(true);
  //     setUser(response.data);
  //     localStorage.setItem("accessToken", response.data.accessToken);
  //     localStorage.setItem("refreshToken", response.data.refreshToken);
  //     // setCookie("refresh_token", response.data.refreshToken, {
  //     //   path: "/",
  //     // });
  //   }
  // };

  // useEffect(() => {
  //   refresh();
  // }, []);

  // login
  const login = async ({ email, password }) => {
    const response = await loginUser(email, password);

    if (response.success) {
      setLoggedIn(true);
      setUser(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      // setCookie("refresh_token", response.data.refreshToken, {
      //   path: "/",
      // });
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
