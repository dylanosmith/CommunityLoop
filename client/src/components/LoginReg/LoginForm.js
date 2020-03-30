import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { navigate } from "@reach/router";


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
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const onSubmitHandler = event => {
      event.preventDefault();
      axios.post("http://localhost:8000/api/login", email,password)
        .then(confirmation => {
            console.log(confirmation);
            navigate("/home");
        })
        .catch(err => console.log("Problem with axios post to login route", err));
    };
    
    return (
        <div>
            <h1>Login</h1>
            <form className={classes.root} onSubmit = {onSubmitHandler}>
                <TextField required id="standard-required" label="Email:" onChange ={(e) => setEmail(e.target.value)}/><br/>
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" onChange ={(e) => setPassword(e.target.value)}/><br/>
                <Button type = "submit" variant ="outlined" color="secondary">Login</Button>
            </form>
            
        </div>
    )
}

export default LoginForm;
