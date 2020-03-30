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
  confirmPassword: "",
  phoneNumber: 1234567891
}
const RegistrationForm = props => {
    const classes = useStyles();
    const [userState, setUserState] = useState({initializeUserState});

    const onChangeHandler = event => {
      setUserState({...userState, [event.target.name]: event.target.value});
    };

    const onSubmitHandler = event => {
      event.preventDefault();
      axios.post("http://localhost:8000/api/users/register", userState)
        .then(newUser => {
          console.log(newUser)
            navigate("/home");
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
                  error= {false}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="text" 
                  required id="standard-required" 
                  label="Last name:" 
                  value={userState.lastName} 
                  name="lastName"
                  onChange={onChangeHandler}
                  error={false}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="email" 
                  required id="standard-required" 
                  label="Email:" 
                  value={userState.email} 
                  name="email"
                  onChange={onChangeHandler}
                  error={false}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="phone" 
                  required id="standard-required" 
                  label="Phone Number:" 
                  value={userState.phoneNumber} 
                  name="phoneNumber"
                  onChange={onChangeHandler}
                  error={false}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="Password"
                  value={userState.password}
                  name="password"
                  onChange={onChangeHandler}
                  error={false}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="confirm Password"
                  value={userState.confirmPassword}  
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  error={false}
                /><br/>
                <Button type="submit" variant ="contained" color="secondary">Submit</Button>
            </form>
            
        </div>
    )
}

export default RegistrationForm
