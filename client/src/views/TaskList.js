import React, { useEffect, useState, useContext } from 'react';
import {Link} from '@reach/router';
import { Button } from '@material-ui/core';
import axios from 'axios';
import NavbarContext from '../context/NavbarContext';

const TaskList = props => {
    const [tasks, setTasks] = useState([]);
    const context = useContext(NavbarContext);

    useEffect(() => {
        console.log("Firing Axios. Props id -->", context.userid);
        axios.get("http://localhost:8000/api/tasks")
        .then(res => {
            console.log("This is response:", res);
            setTasks(res.data.tasks);
        })
        .catch(error =>
            console.log("Errors here", error)
        );
    }, []);

    return (
        <div style={{backgroundColor:"#ffffff", height:"650px", padding:"10px", verticalAlign:"top"}}>
            <ul>
                {tasks.map(task => {
                    return (
                    <li key={task._id}><Link to={"/tasks/"+task._id}>{task.title}</Link></li>)})}
            </ul>
        </div>
    );
}

export default TaskList;