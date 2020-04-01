import React from 'react';
import './App.css';
import {store} from 'react-notifications-component'
import "animate.css"
import 'react-notifications-component/dist/theme.css'

function Button() {
  const handleOnClickDefault = () => {
    store.addNotification({
      title:"Notification:",
      message:"New Task Created!",
      type: "success",
      container:"center",
      insert:"bottom",
      animationIn:["animated", "fadeIn"],
      animationOut:["animated", "fadeOut"],

      dismiss: {
        duration: 2000,
        showIcon: true

      }

    })
  }
  return(
    <div>
      <button onClick={handleOnClickDefault}>
        Make a new Task
      </button>
    </div>
  )
}

export default Button;
//first step: npm install react-notifications-component

//second step:
//  npm install --save animate.css-react
//  npm install --save animate.css

//third step: import ReactNotification from 'react-notifications-component'import React from 'react';


// What my App.js looked like


// import React from 'react';
// import './App.css';
// import Button from "./NotificationButton"
// import ReactNotification from 'react-notifications-component'
// import "animate.css"
// import 'react-notifications-component/dist/theme.css'


// function App() {
//   return(
//     <div className="container">
//       <h1>React Notification</h1>
//       <ReactNotification/>                 
//       <Button/>
//     </div>
//   );
// }

// export default App;import React from 'react';