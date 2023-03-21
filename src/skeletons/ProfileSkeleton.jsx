import { Grid, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CardUserSearcherSkeleton } from "./CardUserSearcherSkeleton";

export const ProfileSkeleton = () => {
  return (
    <>
      <Grid item xs={11} justifyItems={"center"} marginTop={3}>
        <Skeleton variant='rounded' width={'100%'} height={90}/>
        <Stack alignItems={'center'}>
            <CardUserSearcherSkeleton length={3}/>
        </Stack>
      </Grid>
      <Grid item xs={11} marginTop={1.5}>
        <Skeleton variant="text" sx={{fontSize:'1.2rem'}} width={'60%'} />
        <Stack alignItems={"center"} gap={1}>
            <CardUserSearcherSkeleton length={2}/>
        </Stack>
      </Grid>
    </>
  );
};
