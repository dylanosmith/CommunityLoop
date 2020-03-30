import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link, navigate} from "@reach/router";
// import UserProfile from "./UserProfile";

const EditProfile = props =>{
    const { id } = props;

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

    const onSubmiteHandler = e => {
        e.preventDefault();
        axios.put(`/api/users/update/${id}`, {
            firstName: edit.firstName,
            lastName: edit.lastName,
            email: edit.email,
            password: edit.password,
            confirmpassword: edit.confirmpassword,
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
        </div>
    )
}

export default EditProfile;
