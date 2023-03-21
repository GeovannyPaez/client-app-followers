import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useInputValue } from "../hooks/useInputValue";
import { registerFollower } from "../services/user.service";
import { keySeccionToken } from "../hooks/useAuth";
import { Stack } from "@mui/system";
export function RegisterFollower() {
  const initialStateRequest = {
    loading: false,
    error: false,
    success: false,
  };
  const [gender, setGender] = useState("Masculino");
  const [stateRequest, setStateRequest] = useState(initialStateRequest);
  //state inputs form
  const [
    { value: valueInputEmail, isValidate: isValidateEmail },
    onChangeEmail,
  ] = useInputValue({ type: "email" });
  const [{ value: valueInputPhone, required: requiredPhone }, onChangePhone] =
    useInputValue({ initialState: 0 });
  const [{ value: valueInputName, required: requiredName }, onChangeName] =
    useInputValue({ type: "text" });

  //onChange of Input Select 
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  //onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setStateRequest({ error: false, success: false, loading: true });
    const infoForm = {
      email: valueInputEmail,
      name: valueInputName,
      phone: valueInputPhone,
      gender: gender,
    };
    const token = sessionStorage.getItem(keySeccionToken);
    registerFollower(token, infoForm)
      .then((res) => {
        // console.log(res);
        if (res.statusCode === 409) {
          setStateRequest({
            ...stateRequest,
            success: false,
            error: true,
            loading: false,
          });
          return;
        }
        if (res.message === "follower registered") {
          setStateRequest({ ...stateRequest, success: true, error: false });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid xs={12} item padding={0} md={10}>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 3,
          py: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography  variant="h5">
          Registrar Seguidor
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={onChangeName}
            value={valueInputName}
            name="name"
            label="Nombre"
            id="name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={onChangeEmail}
            value={valueInputEmail}
            id="email"
            label="Email"
            helperText={"debe ser formato email [use@mail.co]"}
            name="email"
            type="email"
            error={!isValidateEmail}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            onChange={onChangePhone}
            value={valueInputPhone}
            label="Telefono"
            id="phone"
            type="number"
          />
          <InputLabel id="demo-simple-select-label">Genero</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Genero"
            onChange={handleChange}
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"femenino"}>Femenino</MenuItem>
            <MenuItem value={"otro"}>Otro</MenuItem>
          </Select>
          <Stack marginTop={1}>
            {stateRequest.error && (
              <Alert severity="error">
                seguidor ya ha sido registrado con este email!
              </Alert>
            )}
            {stateRequest.success && (
              <Alert severity="success">¡Seguidor registrado con exito! </Alert>
            )}
          </Stack>
          <Button
            type="submit"
            fullWidth
            disabled={
              isValidateEmail &&
              !requiredName &&
              !requiredPhone &&
              !stateRequest.loading
                ? false
                : true
            }
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            {stateRequest.loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Registrar"
            )}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
