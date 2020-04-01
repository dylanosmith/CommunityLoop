import React, { useEffect, useContext, useState } from 'react';
// import Header from '../components/Header'
import NavAppBar from '../components/Navigation/NavAppBar';
import NavbarContext from '../context/NavbarContext';
// import SideBar from '../components/SideBar'
// import Map from '../components/Map';
import axios from "axios";
import TaskList from '../views/TaskList'
import { Button } from '@material-ui/core';

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
        <div style={{backgroundImage:"linear-gradient(to bottom, #3f51b5 50%, #4e42f5 100%)", height:"100%", verticalAlign:"top"}}>
            {/* <div style={{backgroundColor:"black", height:"25%", margin:"0% 10% 0% 10%"}}>
                <h1 style={{textAlign:"left", margin:"0% 0% 0% 15%"}}>Community Loop</h1>
                <input placeholder="Search CommLoop" type="text" style={{marginLeft:"92%"}}></input>
            </div> */}

            <div style={{backgroundColor:"white", height:"15%", textAlign:"left", verticalAlign:"top", marginBottom:"2%"}}>
                    <h3 style={{display:"inline-block", marginLeft:"6%"}}>Welcome {context.firstName}!</h3>
                    <Button variant="outline">View Profile</Button>
                    <h5 style={{display:"inline-block", marginLeft:"15%", marginRight:"15%"}}>Ratings:</h5>
                    <Button variant="outline">Post a Job</Button>
                    <Button variant="outline">Do some stuff</Button>
            </div>
            <div style={{backgroundColor:"white", width:"25%", display:"inline-block", verticalAlign:"top"}}>
            {/* <TaskList firstName={user.firstName}/> */}
                <h2>Posted Jobs</h2>
                <Button variant="outline">Sort By: </Button>
                <div className="sidebar">
                <TaskList />
                </div>
            </div>
            <div style={{backgroundColor:"white", width:"70%", height:"775px", display:"inline-block", marginLeft:"1%"}}>
                Map
            </div>
        </div>
    )
}

export default HomePage;