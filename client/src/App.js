import React, {useState} from 'react';
import { Router } from "@reach/router";

import './App.css';
import LoginRegView from './views/LoginRegView';
import NavAppBar from './components/Navigation/NavAppBar';
import TaskDetail from './views/TaskDetail';
import UserProfile from './views/UserProfile';
import UserReviews from './views/UserReviews';
import ManagePosts from './views/ManagePosts';
import ManageTasks from './views/ManageTasks';
import HomePage from './views/HomePage';
import NewTask from './views/NewTask';
import EditTask from './views/EditTask';
import EditProfile from './views/EditProfile';
import TaskList from "./views/TaskList";
import Wrapper from './components/Wrapper';



function App () {

  return (
    <div className="App">
      <Wrapper>
        <NavAppBar />
        <Router>
          <LoginRegView path = "/" />
          <HomePage path = "/home" />
          <NewTask path = "/tasks/new" />
          <TaskList path ="/tasks/:id/list" />
          <TaskDetail path = "/tasks/:id" />
          <EditTask path = "/tasks/:id/edit" />
          <UserProfile path = "/user/:id" />
          <EditProfile path = "/user/:id/edit" />
          <UserReviews path = "/user/:id/reviews" />
          <ManagePosts path = "/user/:id/posts" />
          <ManageTasks path = "/user/:id/tasks" />
        </Router>     
      </Wrapper>
    </div>
  );
}

export default App;

