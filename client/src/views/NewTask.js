import React, { useState, useContext } from 'react';
import axios from 'axios';
import 'date-fns';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from "@reach/router";
import NavbarContext from "../context/NavbarContext";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

const NewTask = props =>{
    const classes = useStyles();
    const context = useContext(NavbarContext);

    const [title, setTitle] = useState("");

    const [PosterID] = useState(context.userid);
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [completionDate, setCompletionDate] = useState(new Date());
    const [completed, setCompleted] = useState(true);
    const [typeOfTask, setTypeOfTask] = useState("");
    const [location, setLocation] = useState({
        streetLine1:"",
        streetLine2: "",
        city: "",
        state:"",
        zipcode: null
    });

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/tasks/new', {
            title,
            PosterID,
            description,
            startDate,
            completionDate,
            typeOfTask,
            location
        })
        .then(response => {
            console.log("Response:", response);
            props.navigate(`/tasks/${response.data._id}`);
        })
        .catch(error => console.log("Error:", error))
    }
    return (
        <div>
            <h1>New Task</h1>
            <form className={classes.root} onSubmit={onSubmitHandler}>
                <TextField 
                    required 
                    id="standard-required" 
                    label="Task Title:" 
                    onChange ={(e) => setTitle(e.target.value)}
                    value = {title}
                />
                <br/>
                <TextField 
                    disabled 
                    id="standard-disabled" 
                    label="Poster ID:" 
                    value = {PosterID}
                />
                <br/>
                <TextField
                    id="outlined-multiline-static"
                    label="Task Description"
                    multiline
                    rows="4"
                    variant="outlined"
                    onChange = {(event) =>{setDescription(event.target.value)}}
                    value = {description}
                />
                <br/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Select a start date"
                        format="MM/dd/yyyy"
                        value={startDate}
                        onChange={(date) =>{setStartDate(date)}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <br/>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Select a completion date"
                        format="MM/dd/yyyy"
                        value={completionDate}
                        onChange={(date) =>{setCompletionDate(date)}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <br/>
                </MuiPickersUtilsProvider>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Job Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={typeOfTask}
                    onChange = {(event) =>{setTypeOfTask(event.target.value)}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Bid"}>Bid</MenuItem>
                        <MenuItem value={"Barter"}>Barter</MenuItem>
                        <MenuItem value={"Free"}>Free</MenuItem>
                    </Select>
                    <FormHelperText>Select a job type</FormHelperText>
                </FormControl>
                <br/>
                <h3>Enter Location:</h3>
                <br/>
                <TextField 
                    required 
                    id="standard-required" 
                    label="Street Line 1:" 
                    onChange ={(e) => setLocation({...location,
                        streetLine1: e.target.value})}
                    value = {location.streetLine1}
                />
                <br/>
                <TextField 
                    id="standard-required" 
                    label="Street Line 2:" 
                    onChange ={(e) => setLocation({...location,
                        streetLine2: e.target.value})}
                    value = {location.streetLine2}
                />
                <br/>
                <TextField 
                    id="standard-required" 
                    label="City:" 
                    onChange ={(e) => setLocation({...location,
                        city: e.target.value})}
                    value = {location.city}
                />
                <br/>
                <TextField 
                    id="standard-required" 
                    label="State:" 
                    onChange ={(e) => setLocation({...location,
                        state: e.target.value})}
                    value = {location.state}
                />
                <br/>
                <TextField 
                    id="standard-required" 
                    label="ZipCode:"
                    type="number"
                    onChange ={(e) => setLocation({...location,
                        zipcode: e.target.value})}
                    value = {location.zipcode}
                />
                <br/>
                
                <Button type = "submit" variant ="outlined" color="secondary">Add Task</Button>
            </form>
        </div>
    )
}
export default NewTask;