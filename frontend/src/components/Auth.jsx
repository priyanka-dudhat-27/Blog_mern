/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { authActions } from '../store'; // Adjust the import path as needed

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    const endpoint = isSignUp ? 'register' : 'login';

    axios.post(`http://localhost:8001/api/v1/auth/${endpoint}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).then((res) => {
      dispatch(authActions.Login());
      console.log(res.data);
      navigate('/blogs');
    }).catch((error) => {
      console.log('Error', error);
      setError('failed to login/signup, please try again');
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} boxShadow={'10px 10px 20px #ccc'} borderRadius={5} maxWidth={400} margin={'auto'} marginTop={5} padding={5}>
          <Typography variant='h3' padding={3} textAlign={'center'}>{isSignUp ? 'SignUp' : 'Login'}</Typography>
          {isSignUp && <TextField type='text' name='name' onChange={handleChange} value={inputs.name} margin='normal' placeholder='name'></TextField>}
          <TextField type='email' name='email' onChange={handleChange} value={inputs.email} margin='normal' placeholder='email'></TextField>
          <TextField type='password' name='password' onChange={handleChange} value={inputs.password} margin='normal' placeholder='password'></TextField>
          <Button type="submit" color='warning' sx={{ borderRadius: 3, marginTop: 3 }} variant='contained'>{isSignUp ? 'Signup' : 'Login'}</Button>
          <Button onClick={() => setIsSignUp(!isSignUp)} sx={{ borderRadius: 3, marginTop: 3 }}>Change to {isSignUp ? 'Login' : 'Signup'}</Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
