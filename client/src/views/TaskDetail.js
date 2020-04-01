import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

const TaskDetail = props => {
    const [taskState, setTaskState] = useState(null);

    useEffect(() => {
        console.log("Firing axios. Props id --->", props.id);
        axios.get(`http://localhost:8000/api/tasks/${props.id}`)
        .then(res => {
            console.log("THIS IS THE RESPONSE:", res);
            setTaskState(res.data);
        })
        .catch(error =>
            console.log("SOMETHING IS WRONGGGGGG! HELP MEEEEE", error)
        );
    }, [props.id]);
    return(
        <div>
            <h2>{ props.title }</h2>
            <div><p>Description: { props.description }</p></div>
            <div><p>Start Date: { props.startDate }</p></div>
            <div><p>Completion Date: </p></div>
        <Button variant="outline">Back To Map</Button>
        <Button variant="outline">Submit Bid</Button>
        <Button variant="outline">Message Poster</Button>
        </div>
    )
}

export default TaskDetail;
