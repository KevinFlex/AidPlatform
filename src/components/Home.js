import React from 'react';
import '../App.css';
import Map from './Map/Map'
import SideBar from './Accordion/SideBar';
import { useState, useEffect } from 'react';

import { slide as Menu } from 'react-burger-menu';
import 'leaflet/dist/leaflet.css';



function HomePage() {


    return (
        <>

            <div className=''>
                <SideBar />
            </div>

            <Map />

        </>

    );
}

export default HomePage;