import React from 'react'
import {Container, Grid} from '@mui/material'
import { Header } from '../Header'
export const Layout = ({children}) => {
  return (
    <Container sx={{
      backgroundColor:'white',
      // maxwidth:'600px',
      // height:'100%',
      // marginTop: 8,
      // position:'absolute',
      // top:0,
      // bottom:0,
      // right:'30',
      position:'relative',
      // left:'30',
      display: "flex",
      justifyContent:'center',
      flexDirection: "column",
      alignItems: "center",

    }}>
      <Grid container justifyContent={'center'}  sx={{
        //  boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.75)',
        
        //  height:'100vh',
        //  backgroundColor:'aliceblue',
        height:'100%',
        // position:'relative',
         borderRadius:'20px',
         padding:'0px',
         marginBottom:'70px'
      }} >
        <Header/>
        {children}
      </Grid>
    </Container>
  )
}
