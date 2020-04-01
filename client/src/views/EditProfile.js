import React, {useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import UserProfile from "./UserProfile";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
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
        confirmPassword:"",
        phoneNumber:"",
        image:"",
        submitted: false
    });

    useEffect(() =>{
      axios.get(`http://localhost:8000/api/users/${id}`)
          .then(result => {
              console.log(result);
              setEdit(result.data.user);
          });
  }, [])

    const onChangeHandler = event => {
        setEdit({...edit, [event.target.name]: event.target.value});
      };
  

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/users/update/${id}`, {
            firstName: edit.firstName,
            lastName: edit.lastName,
            email: edit.email,
            password: edit.password,
            phoneNumber: edit.phoneNumber,
            image: edit.image,
        })
        .then(res => {
            console.log(res);
            setEdit({
                ...edit,
                submitted: true
            });
            alert("User was updated")
            navigate(`/user/${id}`)
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
                  error={edit.firstName.length < 2}
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
                  error={edit.lastName.length < 2}
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
                  error={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(edit.email)}
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
                  error={!/^(0|[1-9][0-9]{9})$/i.test(edit.phoneNumber)}
                  helperText={"Please enter a valid phone number"}
                /><br/>
                <TextField 
                  className="inputBox"
                  type="text" 
                  id="standard-password-input" 
                  label="Password"
                  value={edit.password}
                  name="password"
                  onChange={onChangeHandler}
                  error={edit.password. length < 8}
                  helperText={"Password must be at least 2 characters"}
                /><br/>
                <TextField 
                  className="inputBox" 
                  type="text" 
                  id="standard-password-input" 
                  label="confirm Password"
                  value={edit.confirmPassword}  
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  error={edit.confirmPassword !== edit.password}
                  helperText={"Passwords do not match"}
                /><br/>
                <TextField
                  classes="inputBox"
                  type="url"
                  name="image"
                  value={edit.image}
                  onChange={onChangeHandler}
                  helperText={"Must be a url"}
                /><br/>

                <Button type="submit" variant ="contained" color="secondary">Submit</Button>
            </form>
        </div>
    )
}

export default EditProfile;