import React, { useEffect, useContext, useState } from 'react';
import NavbarContext from '../context/NavbarContext';
import axios from "axios";
import TaskList from '../views/TaskList'
import { Button } from '@material-ui/core';
import { Link } from '@reach/router'
import Grid from '@material-ui/core/Grid';
import GoogleMap from "../components/Home/GoogleMap";

const HomePage = props => {
    const context = useContext(NavbarContext);

    const [tasks, setTasks] = useState([])
    React.useEffect(() => {
        axios.get("http://localhost:8000/api/tasks")
        .then(res => {
            console.log("This is response:", res);
            setTasks(res.data.tasks)
        })
        .catch(error =>
            console.log("Errors here", error)
        );
      }, []);

    return(
        <div className="homeContainer">

            {/* style={{backgroundImage:"linear-gradient(to bottom, #3f51b5 50%, #4e42f5 100%)", height:"100%", verticalAlign:"top"}} */}
            {/* <div style={{backgroundColor:"black", height:"25%", margin:"0% 10% 0% 10%"}}>
                <h1 style={{textAlign:"left", margin:"0% 0% 0% 15%"}}>Community Loop</h1>
                <input placeholder="Search CommLoop" type="text" style={{marginLeft:"92%"}}></input>
            </div> */}
            <Grid container direction="row" justify="space-around">
                <Grid item xs={12} sm={12}>
                    <div style={{backgroundColor:"white", display:"flex", justifyContent:"space-evenly", marginBottom:"2%", alignItems:"center"}}>
                        <h3 style={{display:"inline-block"}}>Welcome {context.firstName}!</h3>
                        <Link className="homeLinks" to={`/user/${context.userid}`}>
                            <Button variant="outlined" color="primary">View Profile</Button>
                        </Link>
                        <h5 style={{display:"inline-block", marginLeft:"15%", marginRight:"15%"}}>Ratings: <span style={{color: "gold"}}>&#9734; &#9734; &#9734; &#9734; &#9734;</span></h5>
                        <Link className="homeLinks" to="/tasks/new">
                            <Button variant="contained" color="secondary">Post a Job</Button>
                        </Link>
                        <Link className="homeLinks" to="/">
                            <Button variant="outlined" color="primary">Manage Jobs</Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around">
                <Grid item xs={3} sm={3}>
                    <div>
                        <h2>Posted Jobs</h2>
                        <Button variant="outlined">Sort By: </Button>
                        <div>
                            <TaskList tasks ={tasks} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9} sm={9}>
                    <GoogleMap tasks = {tasks} />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage;