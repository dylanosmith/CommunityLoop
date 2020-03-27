import React, {useState} from 'react';
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

const RegistrationForm = props => {
    const classes = useStyles();
    const [user, setUser] = useState({});
    return (
        <div>
            <h1>Register</h1>
            <form className={classes.root}>
                <TextField required id="standard-required" label="First name:" /><br/>
                <TextField required id="standard-required" label="Last name:" /><br/>
                <TextField required id="standard-required" label="Email:" /><br/>
                <TextField required id="standard-required" label="Phone Number:" /><br/>
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"/><br/>
                <Button variant ="contained" color="secondary">Submit</Button>
            </form>
            
        </div>
    )
}

export default RegistrationForm
