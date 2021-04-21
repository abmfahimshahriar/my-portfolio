import React from 'react';
import "./HomePage.css";
import {Navbar, ShortDescription, BroadDescription} from "../../components";

const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <Navbar/>
            <ShortDescription/>
            <BroadDescription/>
        </div>
    )
}


export default HomePage;