import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Facebook from './Facebook';
import Google from './Google';
import { DragHandleSharp } from '@material-ui/icons';



export default function Login()  {

  const [user, setUser] = React.useState({email: '', password: ''});

  const handleSubmit = event => {
    event.preventDefault();

      axios.post("http://localhost:8000/api/login", {
        email: user.email,
        password: user.password
      }) 
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.error(error.message)
      });
    };

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
          <TextField 
            name="email" 
            label="Email" 
            value = {user.email} 
            onChange={(event) => setUser({...user, email: event.target.value})}  
            fullWidth 
          />
          <TextField 
            type="password" 
            label="Password"
            name="password" 
            value = {user.password}
            onChange={(event) => setUser({...user, password: event.target.value})}
            fullWidth 
          />
          <Box mt={3}>
            <Button type ="submit" variant="contained" color="primary" mt={3} onClick={handleSubmit}>
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
  
  };
