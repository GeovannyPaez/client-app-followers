import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useInputValue } from "../hooks/useInputValue";
import { loginUser } from "../services/user.service";
import { ContexApp } from "../context";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export function Login() {
  const initialStateForm = {
    error: false,
    loading: false,
  };
  const {
    updateState: { activeAuth },
  } = useContext(ContexApp);
  const navigate = useNavigate();
  const [stateForm, setStateForm] = useState(initialStateForm);
  const [
    { value: valuePassword, isValidate: isValidadePassword },
    onChangePassword,
  ] = useInputValue({ type: "password" });

  const [{ value: valueEmail, isValidate: isValidateEmail }, onChangeEmail] =
    useInputValue({ type: "email" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setStateForm({ error:false, loading: true });
    loginUser(valueEmail, valuePassword).then((res) => {
      // console.log(res);
    //   console.log();
      if (res.token) {
        activeAuth(res.token);
        navigate("/");
      } else {
        setStateForm({ loading: false, error: true });
      }
    });
  };

  //   console.log(isValidadePassword,'isValidadePassword',isValidateEmail);
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 2,
          py: 6,
        //   marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Iniciar Session
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            error={!isValidateEmail && valueEmail.length > 0 ? true:false }
            value={valueEmail}
            onChange={onChangeEmail}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            helperText='debe ser en formato e-mail us@mail.com'
            type="email"
            autoComplete="email"
            autoFocus
            aria-required
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"s
            label="Contraseña"
            error={!isValidadePassword && valuePassword.length > 0 ?true:false}
            type="password"
            value={valuePassword}
            onChange={onChangePassword}
            id="password"
            helperText='minimo de caracteres son 6'
            autoComplete="current-password"
          />
          {stateForm.error && <Alert severity="error">email o contraseña incorrecta</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isValidadePassword && isValidateEmail ? false : true}
          >
            {stateForm.loading?   <CircularProgress  color="inherit"/> : 'Enviar'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
