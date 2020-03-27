import React from 'react';
import { Router } from "@reach/router";

import './App.css';
import LoginRegView from './views/LoginRegView';
import NavAppBar from './components/Navigation/NavAppBar';
import TaskDetail from './views/TaskDetail';
import NewTask from './views/NewTask';
import UserProfile from './views/UserProfile';
import UserReviews from './views/UserReviews';
import ManagePosts from './views/ManagePosts';
import ManageTasks from './views/ManageTasks';


function App() {
  return (
    <div className="App">
      <NavAppBar />
      <Router>
        <LoginRegView path = "/" />
        {/* <Home path = "/home" /> */}
        <NewTask path = "/tasks/new" />
        <TaskDetail path = "/tasks/:id" />
        {/* <EditTask path = "/tasks/:id/edit" /> */}
        <UserProfile path = "/user/:id" />
        {/* <EditProfile path = "/user/:id/edit" /> */}
        <UserReviews path = "/user/:id/reviews" />
        <ManagePosts path = "/user/:id/posts" />
        <ManageTasks path = "/user/:id/tasks" />
      </Router>
     
    </div>
  );
}

export default App;
