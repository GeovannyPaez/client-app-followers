import { useState } from "react";

function validarEmail(email) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(email);
}
const validarPassword = (password) => {
  // Verificar si el string tiene al menos 6 caracteres
  if (password.length < 6) {
    return false;
  }

  // Verificar si todos los caracteres son letras o números
  const expresionRegular = /^[a-zA-Z0-9]+$/;
  return expresionRegular.test(password);
};

export const useInputValue = ({ initialState = "", type = "text" }) => {
  const [isValidate, setValidate] = useState(type === "text" ? true : false);
  const [value, setValue] = useState(initialState);
  const [required, setRequire] = useState(true);

  const onChange = (e) => {
    const valueInput = e.target.value;
    setValue(valueInput);
    if (valueInput.trim().length > 0) {
      setRequire(false);
    }
    // console.log(valueInput.length)
    if (type === "password") {
      setValidate(validarPassword(valueInput));
      return;
    }
    if (type === "email") {
      setValidate(validarEmail(valueInput));
      return;
    }
  };
  return [{ value, isValidate, required }, onChange];
};
