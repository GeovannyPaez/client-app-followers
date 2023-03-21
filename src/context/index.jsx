import { createContext, useEffect, useState } from "react";
import { keySeccionToken, useAuth } from "../hooks/useAuth";
import { getInfoUser } from "../services/user.service";

export const ContexApp = createContext();

export const Provider = ({ children }) => {
  const { isAuth, onVerifyLogin, logout, activeAuth } = useAuth();
  const [dataUser, setUser] = useState(undefined);

  useEffect(() => {

    const token = sessionStorage.getItem(keySeccionToken);
    getInfoUser(token)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => logout());
    return;

  }, [isAuth]);

  const updateState = {
    onVerifyLogin,
    logout,
    activeAuth,
  };

  const state = { dataUser, isAuth };
  return (
    <ContexApp.Provider value={{ updateState, state }}>
      {children}
    </ContexApp.Provider>
  );
};
