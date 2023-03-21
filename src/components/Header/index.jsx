import { Grid } from '@mui/material'
import React from 'react'
import { Logo } from '../Logo'

export const Header = () => {
  return (
    <Grid item sx={{
        display: 'flex',
        justifyContent: 'center'
    }} xs={12} >
        <Logo/>
    </Grid>
    )
}
