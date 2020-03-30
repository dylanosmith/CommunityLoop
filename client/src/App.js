import React from 'react';
import { Router } from "@reach/router";

import './App.css';
import LoginRegView from './views/LoginRegView';
import NavAppBar from './components/Navigation/NavAppBar';
import TaskDetail from './views/TaskDetail';
import UserProfile from './views/UserProfile';
import UserReviews from './views/UserReviews';
import ManagePosts from './views/ManagePosts';
import ManageTasks from './views/ManageTasks';
import Home from "./views/Home";
import NewTask from "./views/NewTask";
import EditTask from "./views/EditTask";
import EditProfile from "./views/EditProfile";




function App(
  return (
    <div className="App">
      <NavAppBar />
      <Router>
        <LoginRegView path = "/" />
<<<<<<< HEAD
        <HomePage path = "/home" />
=======
        {/* <Home path = "/home" /> */}
>>>>>>> fd5e11081b48bf02f05917fee033cff8cbd2c590
        <NewTask path = "/tasks/new" />
        <TaskDetail path = "/tasks/:id" />
        <EditTask path = "/tasks/:id/edit" />
        <UserProfile path = "/user/:id" />
        <EditProfile path = "/user/:id/edit" />
        <UserReviews path = "/user/:id/reviews" />
        <ManagePosts path = "/user/:id/posts" />
        <ManageTasks path = "/user/:id/tasks" />
      </Router>
     
    </div>
  );
}

export default App;

