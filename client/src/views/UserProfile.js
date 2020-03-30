import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link} from "@reach/router";

const UserProfile = props =>{
    const { id } = props;
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        notifications:"",
        image:"",
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => {
                console.log(res);
                setUser(res.data.user);
        })
        .catch(err => {
            console.log("UHHHH OHHHHHH", err);
        })
    });
    
    return(
        <div className="wrapper">
            <div className="navbar">
                <h1>User: {user.firstName} {user.lastName}</h1>
                <p> <img src={user.image} alt="profilePic"/> </p>
                <Link to="/user/:id/edit">Edit Profile</Link>
                <Link to="/user/:id/posts">Manage Posts</Link>
                <Link to="/user/:id/tasks">Manage Tasks</Link>
            </div>
            <div className="sidebar">
                <ul>Notifcations:</ul>
                    <li>{user.notifications}</li>
                    {/* button to show notifications? */}
                
            </div>
            <div className="mainContainer">
                <p></p>
            </div>
        </div>
    )
}

export default UserProfile;
