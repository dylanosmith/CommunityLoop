import React, { useEffect, useContext } from 'react';
// import Header from '../components/Header'
import NavAppBar from '../components/Navigation/NavAppBar';
import NavbarContext from '../context/NavbarContext';
// import SideBar from '../components/SideBar'
// import Map from '../components/Map';
import axios from "axios";

const HomePage = props => {
    const context = useContext(NavbarContext);
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
        <div style={{backgroundColor:"#b19cd9", height:"650px", padding:"10px", verticalAlign:"top"}}>
            <div style={{backgroundColor:"white", height:"90px", margin:"0px 5px 0px 5px"}}>
                <h1 style={{textAlign:"left", margin:"0px 0px 0px 25px"}}>Community Loop</h1>
                <input placeholder="Search CommLoop" type="text" style={{marginLeft:"650px"}}></input>
            </div>
            <div style={{backgroundColor:"white", height:"70px", margin:"10px 5px 5px 5px", textAlign:"left", verticalAlign:"top"}}>
                    <h3 style={{display:"inline-block", marginRight:"40px", marginLeft:"10px"}}>Welcome, {context.firstName}!</h3>
                    <p style={{display:"inline-block", marginRight:"80px"}}>View Profile</p>
                    <h5 style={{display:"inline-block", marginRight:"150px"}}>Ratings:</h5>
                    <button style={{display:"inline-block", marginRight:"60px"}}>Post a job</button>
                    <button style={{display:"inline-block"}}>Something else</button>
            </div>
            <div style={{backgroundColor:"white", height:"450px", width:"20%", margin:"5px 11px 0px 0px", display:"inline-block", verticalAlign:"top"}}>
                <h2>Posted Jobs</h2>
                <button>Sort By:</button>
                <p style={{display:"block", marginTop:"10px"}}>Develop my App</p>
                <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
            </div>
            <div style={{backgroundColor:"white", height:"420px", width:"680px", margin:"5px 5px 0px 5px", padding:"15px", display:"inline-block"}}>
                <div style={{backgroundColor:"black", height:"416px", width:"666px", display:"inline-block"}}>
                Map
                </div>
            </div>
        </div>
    )
}

export default HomePage;