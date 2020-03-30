import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const LoginForm = props => {
    const classes = useStyles();
    
    return (
        <div>
            <h1>Login</h1>
            <form className={classes.root}>
                <TextField required id="standard-required" label="Email:" /><br/>
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"/><br/>
                <Button variant ="outlined" color="secondary">Login</Button>
            </form>
            
        </div>
    )
}

export default LoginForm;
