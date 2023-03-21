import { Card, CardHeader, Avatar } from "@mui/material";
import { useState } from "react";
import { keySeccionToken } from "../../hooks/useAuth";
import { followUser } from "../../services/user.service";
import LoadingButton from '@mui/lab/LoadingButton';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name) {
    const [firstName,lastName]= name.split(' ');
    const firstLetter = firstName[0].toUpperCase();
    let secondLetter ;
    if(!lastName){
        secondLetter = ''
    } else {
        secondLetter=lastName[0].toUpperCase();
    }
    
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${firstLetter}${secondLetter}`,
  };
}

export const CardUserSearcher = ({
  email = "noencontrado@mail.com",
  name = "Usuario no existe",
  follower = false,
  userId = undefined,
  isFollowing=false,
}) => {
    const [loading,setLoading]= useState(false);
    const [isFollowingState,setIsFollowingState]= useState(isFollowing);
    const onHandleFollow = ()=>{
        setLoading(true)
        const token = window.sessionStorage.getItem(keySeccionToken);

        followUser(token,userId)
            .then(res=>{
                setIsFollowingState(res.isFollowing);
                console.log(res);
            })
            .finally(()=>setLoading(false))
    }
  return (
    <Card sx={{ width:'100%', marginTop:'8px' }}>
      <CardHeader
        sx={{ gap: "7px" ,justifyContent:'center', flexWrap:'wrap',} }
        avatar={<Avatar {...stringAvatar(name)}></Avatar>}
        action={
          follower ? (
            ""
          ) : (
            <LoadingButton
                loading={loading}
              variant="contained"
              size="small"
              onClick={onHandleFollow}
            
              sx={{
                marginTop: "8px",
                // marginRight:'0px',
                padding: "5px",
                fontSize: "12px",
                backgroundColor: isFollowingState && 'gray',
                // width:'auto'
              }}
            >
            {isFollowingState ? 'Siguiendo':'Seguir'}
            </LoadingButton>
          )
        }
        title={name}
        subheader={email}
      />
    </Card>
  );
};
