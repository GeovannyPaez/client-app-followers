import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const keySeccionToken = "token";

export const useAuth = () => {
  const isToken = () => {
    const token = window.sessionStorage.getItem(keySeccionToken);
    if (!token || token === "undefined") {
      return false;
    }
    return true;
  };
  const [isAuth, setIsAuth] = useState(isToken);
  const activeAuth = (token) => {
    // console.log(token)
    if (token) {
      window.sessionStorage.setItem(keySeccionToken, token);
      setIsAuth(true);
    }
  };
  const logout = () => {
    window.sessionStorage.removeItem(keySeccionToken);
    setIsAuth(false);
  };
  const onVerifyLogin = (component) => {
    if (isAuth) {
      return component;
    }
    return <Navigate to={"/login"} />;
  };

  return { isAuth, onVerifyLogin, activeAuth, logout };
};
