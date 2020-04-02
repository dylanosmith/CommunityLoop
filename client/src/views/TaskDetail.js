import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

const TaskDetail = props => {
    const [taskState, setTaskState] = useState({
        title: "",
        description: "",
        startDate: Date.now(),
        completionDate: Date.now(),

    });

    const dateFormat = (date) => {
        let taskDate = new Date(date);
        return taskDate.getMonth() + "/" + taskDate.getDate() + "/" + taskDate.getFullYear()
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
        <Button variant="outline" color="primary">Back To Map</Button>
        <Button variant="outline" color="primary">Submit Bid</Button>
        <Button variant="outline" color="primary">Message Poster</Button>
        </div>
    )
}

export default TaskDetail;
