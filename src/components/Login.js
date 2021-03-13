import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Facebook from './Facebook';
import Google from './Google';

export default function Login() {
  const data = {};


    axios.post("http://localhost:8000/api/login", {
      email: 'admin@demo.com',
       password: '1234'
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    })
  

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
      direction="column"
    >
  
      <Grid item xs={3} spacing={3}>
        <TextField name="email" label="Email"  fullWidth></TextField>
        <TextField type="password" name="password" label="Password"  fullWidth></TextField>
        <Box mt={3}>
          <Button variant="contained" color="primary" mt={3} onClick={Login}>
            Login
          </Button>
        </Box>
      </Grid>   
      <Grid item xs={3} spacing={3}>
        <Box mt={3}>
         <Facebook />
        </Box>
      </Grid>   
      <Grid item xs={3} spacing={3}>
        <Box mt={2}>
         <Google />
        </Box>
      </Grid>   
    </Grid> 
  );
}