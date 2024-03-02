import React from 'react'
import { AppBar,Toolbar,Typography,Avatar,Grid } from '@mui/material'
import myAvatar from '../assets/myAvatar.png'

const Header = () => {

  return (
    <>
      <AppBar style={{height:50}}>
        <Toolbar>
          <Typography variant='h6' style={{fontSize:'1rem',fontWeight:'bold',paddingBottom:'.6rem'}}>
            MadeByKhilesh
          </Typography>
          <Grid container justifyContent="flex-end" alignItems="center" style={{paddingBottom:'.5rem'}}>
            <Avatar alt="Your Avatar" src={myAvatar} />
        </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
