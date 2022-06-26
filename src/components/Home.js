import React from 'react';
import '../App.css';
import Map from './Map'
import SideBar from './Accordion/SideBar';

function HomePage() {
    return (
        <div>
            <Map />
            <SideBar />
        </div>
    );
}

export default HomePage;