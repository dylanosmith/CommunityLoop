import React, {useContext } from 'react';
import {Link} from '@reach/router';
import { Button } from '@material-ui/core';
import NavbarContext from '../context/NavbarContext';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '125ch',
      margin: '0 auto',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'block',
    },
    list :{
        height: '500px',
        overflow: 'scroll',
    }
  }));


const TaskList = props => {
    // const [tasks, setTasks] = useState([]);
    const context = useContext(NavbarContext);
    const classes = useStyles();

    const dateFormat = (date) => {
        let taskDate = new Date(date);
        return taskDate.getMonth()+1 + "/" + taskDate.getDate() + "/" + taskDate.getFullYear()
    }

    // useEffect(() => {
    //     console.log("Firing Axios. Props id -->", context.userid);
    //     axios.get("http://localhost:8000/api/tasks")
    //     .then(res => {
    //         console.log("This is response:", res);
    //         setTasks(res.data.tasks);
    //     })
    //     .catch(error =>
    //         console.log("Errors here", error)
    //     );
    // }, []);

    return (
        <div style={{backgroundColor:"#ffffff", height:"650px", padding:"10px", verticalAlign:"top"}}>
            <List className={classes.list}>
                {props.tasks.map(task => {
                    return (
                    <ListItem key={task._id}>
                        <ListItemAvatar>
                            <AssignmentTurnedInIcon />
                        </ListItemAvatar>
                        <ListItemText
                            primary={task.title}
                            secondary={
                                <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Start Date: 
                                    {dateFormat(task.startDate)}
                                </Typography>
                                {task.description}
                                <br/>
                                <Link to={"/tasks/"+task._id}>View Details</Link>
                                </React.Fragment>
                            }
                        />
                    <Divider variant="inset" component="li" />
                    </ListItem>)})}
            </List>
        </div>
    );
}

export default TaskList;