import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {navigate} from '@reach/router';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const initializeUserState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmpassword: "",
  phoneNumber: "",
  submitted: false
}
const RegistrationForm = props => {
    const classes = useStyles();
    const [userState, setUserState] = useState({initializeUserState});

    const onChangeHandler = event => {
      event.preventDefault();
      setUserState({...userState, [event.target.name]: event.target.value});
    };

    const onSubmitHandler = event => {
      axios.post("http:/localhost:8000/api/users/new", userState)
        .then(newUser => {
            console.log(newUser);
            props.navigate("/home");
        })
        .catch(err => console.log("Problem with axios post to create new user", err));
    };

    return (
        <div>
            <h1>Register</h1>
            <form className={classes.root} onSubmit={onSubmitHandler}>
                <TextField 
                  className="inputBox" 
                  type="text" 
                  required id="standard-required" 
                  label="First name:" 
                  value={userState.firstName} 
                  name="firstName"
                  onChange={onChangeHandler}
                  error={userState.firstName < 2}
                  helperText={"First name must be at least 2 characters"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="text" 
                  required id="standard-required" 
                  label="Last name:" 
                  value={userState.lastName} 
                  name="lastName"
                  onChange={onChangeHandler}
                  error={userState.lastName < 2}
                  helperText={"Last name must be at least 2 characters "}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="email" 
                  required id="standard-required" 
                  label="Email:" 
                  value={userState.email} 
                  name="email"
                  onChange={onChangeHandler}
                  error={/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(userState.email)}
                  helperText={"Please enter a valid email address"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="phone" 
                  required id="standard-required" 
                  label="Phone Number:" 
                  value={userState.phoneNumber} 
                  name="phoneNumber"
                  onChange={onChangeHandler}
                  error={/^([0-9]{3}+[0-9]{3}+[0-9]{4})/.test(userState.phoneNumber)}
                  helperText={"Please enter a valid phone number"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="Password"
                  value={userState.password}
                  type="password" 
                  autoComplete="current-password" 
                  value={userState.password} 
                  name="password"
                  onChange={onChangeHandler}
                  error={userState.password < 2}
                  helperText={"Password must be at least 2 characters"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="confirmPassword"
                  value={userState.confirmpassword}
                  type="password" 
                  autoComplete="current-password" 
                  value={userState.confirmpassword} 
                  name="confirmpassword"
                  onChange={onChangeHandler}
                  error={userState.confirmpassword !== userState.password}
                  helperText={"Passwords do not match"}
                /><br/>
                <Button variant ="contained" color="secondary">Submit</Button>
            </form>
            
        </div>
    )
}

export default RegistrationForm
