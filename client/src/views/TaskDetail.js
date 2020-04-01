import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

const TaskDetail = props => {
    const [taskState, setTaskState] = useState({});

    useEffect(() => {
        console.log("Firing axios. Props id --->", props.id);
        axios.get(`http://localhost:8000/api/tasks/${props.id}`)
        .then(res => {
            console.log("THIS IS THE RESPONSE:", res);
            setTaskState(res.data.task);
            console.log(res.data.task.startDate.toLocaleDateString());
        })
        .catch(error =>
            console.log("SOMETHING IS WRONGGGGGG! HELP MEEEEE", error)
        );
    }, []);
    return(
        <div>
            <h2>{ taskState.title }</h2>
            <div><p>Description: { taskState.description }</p></div>
            <div><p>Start Date: { taskState.startDate }</p></div>
            <div><p>Completion Date: {taskState.completionDate} </p></div>
        <Button variant="outline" color="primary">Back To Map</Button>
        <Button variant="outline" color="primary">Submit Bid</Button>
        <Button variant="outline" color="primary">Message Poster</Button>
        </div>
    )
}

export default TaskDetail;
