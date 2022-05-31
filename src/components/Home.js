import React from 'react';
import '../App.css';
import SideBar from './Accordion/SideBar';

function HomePage() {
    return (
        <div>
            <h1>Welcome to your Aid Platform</h1>
            <h2>From Neighboors To Neighboors</h2>
            <SideBar />
        </div>
    );
}

export default HomePage;