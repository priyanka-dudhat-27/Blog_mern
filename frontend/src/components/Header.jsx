/* eslint-disable no-unused-vars */
import React from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material'

const Header = () => {
  return (
    <AppBar sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(110,9,121,0.8940826330532213) 35%, rgba(0,212,255,1) 100%)"
    }}>
      <Toolbar>
        <Typography variant='h4'>BlogsApp</Typography>
        <Box display="flex" marginLeft="auto">
          <Button color="warning" variant='contained' sx={{margin:1,borderRadius:10}}>Login</Button>
          <Button color="warning" variant='contained' sx={{margin:1,borderRadius:10}}>Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header