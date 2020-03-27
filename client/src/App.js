import React from 'react';
import { Router } from "@reach/router";

import './App.css';
import LoginRegView from './views/LoginRegView';
import NavAppBar from './components/Navigation/NavAppBar';


function App() {
  return (
    <div className="App">
      <NavAppBar />
      <Router>
        <LoginRegView path = "/" />



      </Router>
     
    </div>
  );
}

export default App;
