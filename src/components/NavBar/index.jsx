import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
export function NavBar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("profile");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate("/" + newValue);
  };

  return (
    <Grid
      item
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        placeItems: "center",
      }}
    >
      <BottomNavigation
        sx={{
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0px -1px 3px 0px rgba(0,0,0,0.64)",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Perfile"
          value=""
          icon={<AccountCircleIcon />}
        />

        <BottomNavigationAction
          label="Buscar"
          value="search-user"
          icon={<PersonSearchIcon />}
        />
        <BottomNavigationAction
          label="Registrar"
          value="register-follower"
          icon={<PersonAddIcon />}
        />
      </BottomNavigation>
    </Grid>
  );
}
