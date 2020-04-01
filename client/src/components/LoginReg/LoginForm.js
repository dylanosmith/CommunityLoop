import React, {useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { navigate } from "@reach/router";
import NavbarContext from '../../context/NavbarContext';

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
    const context = useContext(NavbarContext);

    const onSubmitHandler = event => {

      let data = {email: email, password: password}
      event.preventDefault();
      axios.post("http://localhost:8000/api/login", data)
        .then(confirmation => {
            console.log(confirmation);
            context.userid = confirmation.data.user._id;
            context.firstName = confirmation.data.user.firstName;
            context.lastName = confirmation.data.user.lastName;
            context.email = confirmation.data.user.email;
            navigate("/home/");
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
