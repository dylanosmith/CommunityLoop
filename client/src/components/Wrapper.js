import React, { useState } from 'react';
import NavbarContext from '../context/NavbarContext';

const Wrapper = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState({
      userid: null,
      firstName: "",
      lastName: "",
      email: "",
    });

  return (
    <div className="App">
        <NavbarContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
           {props.children}
        </NavbarContext.Provider>
    </div>
  );
}

export default Wrapper;