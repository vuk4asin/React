import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 4,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
    },
  }));
  
  
    

export default function Nav()
{
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <AppBar position="inherit">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Welcome
          </Typography>
         <Link  to ='/login'><Button variant ="contained" color="primary">Login</Button></Link>
         <Link  to ='/register'><Button variant="contained" color="primary">Register</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    )
}





