import React from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Map from '../components/Map'



const HomePage = () => {
    return (
        <div className="formContainer">
            <div style={{display:"inline-block"}}>
                <Header/>
            </div>
            <div>
                
            </div>
            <Map/>
            <NavBar/>
            <SideBar/>
        </div>

    )
}

export default HomePage;