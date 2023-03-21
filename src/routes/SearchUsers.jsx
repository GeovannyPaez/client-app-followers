import { Grid, Typography } from "@mui/material";
import { Searcher } from "../components/Searcher/Index";
import { CardUserSearcher } from "../components/CardIUserSearhcer";
import { useContext, useState } from "react";
import { searchUser } from "../services/user.service";
import { ContexApp } from "../context";
import { CardUserSearcherSkeleton } from "../skeletons/CardUserSearcherSkeleton";

export const SearchUsers = () => {
  const {
    updateState: { logout },
  } = useContext(ContexApp);
  const [usersSearchers, setUserSearcher] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);


  const onHandleSearch = () => {
    if (!inputValue) {
      return;
    }
    setLoading(true);
    setUserSearcher([]);
    searchUser(inputValue)
      .then((res) => {
        setUserSearcher(res);
      })
      .catch(() => logout())
      .finally(() => setLoading(false));
  };

  
  const onChangeInputSearch = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <Grid item height={50} marginTop={3}>
        <Typography variant="h4" sx={{ fontSize: "2rem" }}>
          {" "}
          Buscar Usuarios
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Searcher
          onSearch={onHandleSearch}
          onChange={onChangeInputSearch}
          inputValue={inputValue}
        />
      </Grid>
      <Grid item xs={11} marginTop={2}>
        {loading && <CardUserSearcherSkeleton length={5} />}
        {usersSearchers.length === 0 && <CardUserSearcher />}
        {usersSearchers.map((user) => {
          const name = user?.profile?.name || "Sin Nombre";

          return (
            <CardUserSearcher
              key={user.email}
              name={name}
              email={user.email}
              isFollowing={user.isFollowing}
              userId={user.id}
            />
          );
        })}
      </Grid>
    </>
  );
};
