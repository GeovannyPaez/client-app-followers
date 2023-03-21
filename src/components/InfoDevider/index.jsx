import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
import TransgenderIcon from '@mui/icons-material/Transgender';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import {Email} from '@mui/icons-material'
export  function InfoDivider({email = 'user@mmail.com',phone='11551515',gender='Masculino'}) {
  return (
    <List
      sx={{
        width: '100%',
        // maxWidth: ,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={email} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TransgenderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Genero" secondary={gender} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Telefono" secondary={phone} />
      </ListItem>
      <Divider variant="inset" component="li"/>
    </List>
  );
}