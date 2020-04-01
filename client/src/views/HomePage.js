import React, { useEffect, useContext, useState } from 'react';
// import Header from '../components/Header'
import NavAppBar from '../components/Navigation/NavAppBar';
import NavbarContext from '../context/NavbarContext';
// import SideBar from '../components/SideBar'
// import Map from '../components/Map';
import axios from "axios";

const HomePage = props => {
    const context = useContext(NavbarContext);
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        notifications:"",
        image:"",
    });
    // const [user, setUser] = React.useState({})

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/users/${id}`)
    //         .then(res => {
    //             console.log(res);
    //             setUser(res.data.user);
    //     })
    //     .catch(err => {
    //         console.log("UHHHH OHHHHHH", err);
    //     })
    // }, []);
    return(
        <div style={{backgroundColor:"#b19cd9", height:"100%", verticalAlign:"top"}}>
            {/* <div style={{backgroundColor:"black", height:"25%", margin:"0% 10% 0% 10%"}}>
                <h1 style={{textAlign:"left", margin:"0% 0% 0% 15%"}}>Community Loop</h1>
                <input placeholder="Search CommLoop" type="text" style={{marginLeft:"92%"}}></input>
            </div> */}

            <div style={{backgroundColor:"white", height:"15%", textAlign:"left", verticalAlign:"top"}}>
                    <h3 style={{display:"inline-block"}}>Welcome {context.firstName}!</h3>
                    <p style={{display:"inline-block"}}>View Profile</p>
                    <h5 style={{display:"inline-block"}}>Ratings:</h5>
                    <button style={{display:"inline-block"}}>Post a job</button>
                    <button style={{display:"inline-block"}}>Something else</button>
            </div>
            <div style={{backgroundColor:"white", width:"25%", display:"inline-block", verticalAlign:"top"}}>
            <TaskList firstName={user.firstName}/>
                <h2>Posted Jobs</h2>
                <button>Sort By:</button>
                <p style={{display:"block"}}>Develop my App</p>
                <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                <div className="sidebar">
                <ul>Notifications:</ul>
                    <li>{user.notifications}</li>
                    {/* button to show notifications? */}
                </div>
            </div>
            <div style={{backgroundColor:"white", width:"70%", display:"inline-block"}}>
                Map
            </div>
        </div>
    )
}

export default HomePage;