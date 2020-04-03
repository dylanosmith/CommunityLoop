import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { Link } from "@reach/router";

const TaskDetail = props => {
    const [taskState, setTaskState] = useState({
        title: "",
        description: "",
        startDate: Date.now(),
        completionDate: Date.now(),

    });

    const dateFormat = (date) => {
        let taskDate = new Date(date);
        console.log(taskDate);
        return taskDate.getMonth()+1 + "/" + taskDate.getDate() + "/" + taskDate.getFullYear()
    }

    useEffect(() => {
        console.log("Firing axios. Props id --->", props.id);
        axios.get(`http://localhost:8000/api/tasks/${props.id}`)
        .then(res => {
            console.log("THIS IS THE RESPONSE:", res);
            setTaskState({
                title: res.data.task.title,
                description: res.data.task.description,
                startDate: res.data.task.startDate,
                completionDate:res.data.task.completionDate 
            });
        })
        .catch(error =>
            console.log("SOMETHING IS WRONGGGGGG! HELP MEEEEE", error)
        );
    }, []);
    return(
        <div>
            <h2>{ taskState.title }</h2>
            <div><p>Description: { taskState.description }</p></div>
            <div><p>Start Date: { dateFormat(taskState.startDate) }</p></div>
            <div><p>Completion Date: { dateFormat(taskState.completionDate) } </p></div>
        <Link to="/home" className="linkDecor"><Button variant="outlined" color="primary">Back To Map</Button></Link>
        <Button variant="outlined" color="primary">Submit Bid</Button>
        <Button variant="outlined" color="primary">Message Poster</Button>
        </div>
    )
}

export default TaskDetail;
