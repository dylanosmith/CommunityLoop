import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import NavAppBar from "../components/Navigation/NavAppBar"

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
    }, []);
    
    return(
        <div className="wrapper">
            <div className="navbar">
                <h1>{user.firstName} {user.lastName}</h1>
                <p> <img src={user.image} alt="profilePic"/></p>
                <Link to={"/user/" + user._id + "/edit"}>Edit Profile</Link><br/>
                <Link to={`/user/${id}/posts`}>Manage Posts</Link><br/>
                <Link to={`/user/${id}/tasks`}>Manage Tasks</Link><br/>
            </div>
            <div>
                <Link to={`/tasks/new`}>Create New Task</Link>
            </div>
            <div className="sidebar">
                <p>Dude.</p>
            </div>
            <div className="mainContainer">
                <p></p>
            </div>
        </div>
    )
}

export default UserProfile;
