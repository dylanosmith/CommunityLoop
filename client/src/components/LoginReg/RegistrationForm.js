import React, {useState, useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { navigate } from '@reach/router';
import NavbarContext from '../../context/NavbarContext';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width:  '25ch',
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
    const [userState, setUserState] = useState({
      firstName: initializeUserState.firstName,
      lastName: initializeUserState.lastName,
      email: initializeUserState.email,
      password: initializeUserState.password,
      confirmPassword: initializeUserState.confirmPassword,
      phoneNumber: initializeUserState.phoneNumber 
    });

    const context = useContext(NavbarContext);

    const onChangeHandler = event => {
      setUserState({...userState, [event.target.name]: event.target.value});
    };

    const onSubmitHandler = event => {
      event.preventDefault();
      axios.post("http://localhost:8000/api/users/register", userState)
        .then(newUser => {
          console.log(newUser);
          context.userid = newUser.data._id;
          context.firstName = newUser.data.firstName;
          context.lastName = newUser.data.lastName;
          context.email = newUser.data.email;
          navigate("/home/");
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
                  error={userState.firstName.length < 2}
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
                  error={userState.lastName.length < 2}
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
                  error={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userState.email)}
                  helperText={"Please enter a valid email address"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="tel" 
                  required id="standard-required" 
                  label="Phone Number:" 
                  value={userState.phoneNumber} 
                  name="phoneNumber"
                  onChange={onChangeHandler}
                  error={!/^(0|[1-9][0-9]{9})$/i.test(userState.phoneNumber)}
                  helperText={"Please enter a valid phone number"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="Password"
                  value={userState.password}
                  name="password"
                  onChange={onChangeHandler}
                  error={userState.password.length < 8}
                  helperText={"Password must be at least 8 characters"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="Confirm Password"
                  value={userState.confirmPassword}  
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  error={userState.confirmPassword !== userState.password}
                  helperText={"Passwords do not match"}
                /><br/>
                <Button type="submit" variant ="contained" color="secondary">Submit</Button>
            </form>
            
        </div>
    )
}

export default RegistrationForm
