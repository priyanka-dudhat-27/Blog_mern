/* eslint-disable no-unused-vars */
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Auth = () => {
  const [IsSignUp,setIsSignUp]=useState(false)
  const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} boxShadow={'10px 10px 20px #ccc'} borderRadius={5} maxWidth={400} margin={'auto'} marginTop={5} padding={5}>
          <Typography variant='h3' padding={3} textAlign={'center'}>{IsSignUp?"SignUp":"Login"}</Typography>
          <TextField type='text' name='name' onChange={handleChange} value={inputs.name} margin='normal' placeholder='name'></TextField>
          <TextField type='email' name='email' onChange={handleChange} value={inputs.email} margin='normal' placeholder='email'></TextField>
          <TextField type='password' name='password' onChange={handleChange} value={inputs.password} margin='normal' placeholder='password'></TextField>
          <Button type="submit" color='warning' sx={{borderRadius:3,marginTop:3}} variant='contained'>Login</Button>
          <Button onClick={()=>setIsSignUp(!IsSignUp)} sx={{borderRadius:3,marginTop:3}}>Change to {IsSignUp?"Login":"Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth