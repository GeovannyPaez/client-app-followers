import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import {
  CardUserSearcher,
  stringAvatar,
} from "../components/CardIUserSearhcer";
import { InfoDivider } from "../components/InfoDevider";
import { ContexApp } from "../context";
import { ProfileSkeleton } from "../skeletons/ProfileSkeleton";
export const Profile = () => {
  const {
    state: { dataUser },
    updateState: { logout },
  } = useContext(ContexApp);

  if (!dataUser) return <ProfileSkeleton />;
  const profileDefault = {
    name: "Sin Nombre",
    phone: "sin telefono",
  };
  const profile = dataUser.user.profile || profileDefault;
  return (
    <>
      <Grid item xs={12} padding={0} justifyItems={"center"} marginTop={0} md={11}>
        <Paper elevation={2}>
          <Stack padding={2} alignItems={'center'} justifyContent={"center"} spacing={2} direction={"row"}>
            <Avatar {...stringAvatar(profile.name)} />
            <Stack>
              <Typography variant="h4" fontSize={'1.6rem'} >{profile.name}</Typography>
              <Typography>
                <strong>{dataUser.countFollowers}</strong> seguidores
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Button onClick={() => logout()} color="secondary">
              cerrar session
            </Button>
          </Stack>
        </Paper>
        <Stack marginTop={1}>
          <Stack>
            <InfoDivider
              email={dataUser.user.email}
              phone={profile.phone}
              gender={profile.gender}
            />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h5" color={'black'}> lista de seguidores</Typography>
        <Stack alignItems={"center"} gap={1}>
          {dataUser.user.followersUsers?.map((item) => {
            const name = item.user.profile.name || "Sin Nombre";
            return (
              <CardUserSearcher
                email={item.user.email}
                name={name}
                follower={true}
              />
            );
          })}
          {dataUser.user.followers?.map((item) => {
            const name = item.profile?.name || "Sin Nombre";
            //  console.log(name)
            return (
              <CardUserSearcher
                key={item.email}
                email={item.email}
                name={name}
                follower={true}
              />
            );
          })}
        </Stack>
      </Grid>
    </>
  );
};


