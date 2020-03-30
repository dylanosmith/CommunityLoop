import React, {useState, useEffect } from "react";
import axios from "axios";
import {navigate} from "@reach/router";
// import UserProfile from "./UserProfile";
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

const EditProfile = props =>{
    const { id } = props;
    const classes = useStyles();

    const [edit, setEdit] = useState ({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:"",
        phoneNumber:"",
        image:"",
        submitted: false
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => {
            console.log(res);
            setEdit(res.data.user);
        })
        .catch(err => console.log(err))
    });

    const onChangeHandler = event => {
        setEdit({...edit, [event.target.name]: event.target.value});
      };
  

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`/api/users/update/${id}`, {
            firstName: edit.firstName,
            lastName: edit.lastName,
            email: edit.email,
            password: edit.password,
            confirmpassword: edit.confirmPassword,
            phoneNumber: edit.phoneNumber,
            image: edit.image,
            submitted: false
        })
        .then(res => {
            console.log(res);
            setEdit({
                ...edit,
                submitted: true
            });
            alert("User was updated")
            navigate(`user/${id}`)
        })
        .catch(err => console.log("THERE IS A PROBLEM!!!!!!!!!!!!", err));
        
    };

    return(
        <div>
            <h1>Edit Profile</h1>
            <form className={classes.root} onSubmit={onSubmitHandler}>
                <TextField 
                  className="inputBox" 
                  type="text" 
                  required id="standard-required" 
                  label="First name:" 
                  value={edit.firstName} 
                  name="firstName"
                  onChange={onChangeHandler}
                  error={edit.firstName < 2}
                  helperText={"First name must be at least 2 characters"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="text" 
                  required id="standard-required" 
                  label="Last name:" 
                  value={edit.lastName} 
                  name="lastName"
                  onChange={onChangeHandler}
                  error={edit.lastName < 2}
                  helperText={"Last name must be at least 2 characters "}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="email" 
                  required id="standard-required" 
                  label="Email:" 
                  value={edit.email} 
                  name="email"
                  onChange={onChangeHandler}
                  error={/^([\w-]+@([\w-]+\.)+[\w-]+)?$/.test(edit.email)}
                  helperText={"Please enter a valid email address"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="phone" 
                  required id="standard-required" 
                  label="Phone Number:" 
                  value={edit.phoneNumber} 
                  name="phoneNumber"
                  onChange={onChangeHandler}
                  // error={/^([0-9]{3}+[0-9]{3}+[0-9]{4})/.test(edit.phoneNumber)}
                  // helperText={"Please enter a valid phone number"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="Password"
                  value={edit.password}
                  name="password"
                  onChange={onChangeHandler}
                  error={edit.password < 2}
                  helperText={"Password must be at least 2 characters"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="password" 
                  id="standard-password-input" 
                  label="confirm Password"
                  value={edit.confirmPassword}  
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  error={edit.confirmPassword !== edit.password}
                  helperText={"Passwords do not match"}
                /><br/>
                <Button type="submit" variant ="contained" color="secondary">Submit</Button>
            </form>
        </div>
    )
}

export default EditProfile;
