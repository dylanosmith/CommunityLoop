import React, { useState } from 'react';
import axios from 'axios';

const NewTask = props =>{
    const [title, setTitle] = useState("");
    const [BidderID, setBidderID] = useState(0);
    const [PosterID, setPosterID] = useState(0);
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(Date);
    const [completionDate, setCompletionDate] = useState(Date);
    const [completed, setCompleted] = useState(true);
    const [typeOfTask, setTypeOfTask] = useState(false);
    const [location, setLocation] = useState("")

const onSubmitHandler = event => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/tasks/new', {
        title,
        BidderID,
        PosterID,
        description,
        startDate,
        completionDate,
        completed,
        typeOfTask,
        location
    })
    .then(response => {
        console.log("Response:", response);
        props.navigate(`/tasks/${props.id}/list`);
    })
    .catch(error => console.log("Error:", error))
}
    return (
        <div>
            <h1>New Task</h1>
            <form className="taskForm" onSubmit={onSubmitHandler}>
                <p>
                    <label>Task Title</label> <br />
                    <input type="text" value={title} name="title" onChange = {(event) =>{setTitle(event.target.value)}}/>
                </p>
                <p>
                    <label>Bidder ID#</label> <br />
                    <input type="text" value={BidderID} name="BidderID" onChange = {(event) =>{setBidderID(event.target.value)}}/>
                </p>
                <p>
                    <label>Poster ID#</label> <br />
                    <input type="text" value={PosterID} name="PosterID" onChange = {(event) =>{setPosterID(event.target.value)}}/>
                </p>
                <p>
                    <label>Task Description</label> <br />
                    <textarea type="text" value={description} name="description" onChange = {(event) =>{setDescription(event.target.value)}}/>
                </p>
                <p>
                    <label>Task Start Date</label> <br />
                    <input type="date" value={startDate} name="startDate" onChange = {(event) =>{setStartDate(event.target.value)}}/>
                </p>
                <p>
                    <label>Task Completion Date</label> <br />
                    <input type="date" value={completionDate} name="completionDate" onChange = {(event) =>{setCompletionDate(event.target.value)}}/>
                </p>
                <p>
                    <label>Completed</label> <br />
                    <input type="boolean" value={completed} name="completed" onChange = {(event) =>{setCompleted(event.target.value)}}/>
                </p>
                <p>
                <label htmlFor="typeOfTask">Task Resolution Type</label> <br />
                <select value={typeOfTask} name="typeOfTask" onChange = {(event) =>{setTypeOfTask(event.target.value)}}>
                    <option>Choose One...</option>
                    <option value={typeOfTask.bid} name="bid">Bid</option>
                    <option value={typeOfTask.barter} name="barter">Barter</option>
                    <option value={typeOfTask.free} name="free">Free</option>
                </select>
                </p>
                <p>
                    <label>Location</label> <br />
                    <p>
                    <label>Street Address Line 1</label>
                    <input type="text" value={location.streeLine1} name="streetLine1" onChange = {(event) => {setLocation({...location, streetLine1:event.target.value})}}/>
                    </p>
                    <p>
                    <label>Street Address Line 2</label>
                    <input type="text" value={location.streeLine2} name="streetLine2" onChange = {(event) => {setLocation({...location, streetLine2:event.target.value})}}/>
                    </p>
                    <p>
                    <label>City</label>
                    <input type="text" value={location.city} name="city" onChange = {(event) => {setLocation({...location, city:event.target.value})}}/>
                    </p>
                    <p>
                    <label>State</label>
                    <input type="text" value={location.state} name="state" onChange = {(event) => {setLocation({...location, state:event.target.value})}}/>
                    </p>
                    <p>
                    <label>Zipcode</label>
                    <input type="text" value={location.zipcode} name="zipcode" onChange = {(event) => {setLocation({...location, zipcode:event.target.value})}}/>
                    </p>
                    <input className="button" type="submit"/>
                </p>
            </form>
        </div>
    )
}
export default NewTask;
