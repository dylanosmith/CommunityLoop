import React, { useState } from 'react';
import NavbarContext from '../context/NavbarContext';

const Wrapper = (props) => {
  const [person, setPerson] = useState({
    firstName: "",


  });

  return (
    <div className="App">
      <NavbarContext.Provider value={{person, setPerson}}>
          {props.children}
      </NavbarContext.Provider>
    </div>
  );
}

export default Wrapper;
