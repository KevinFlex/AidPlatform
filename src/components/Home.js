import React from 'react';
import '../App.css';
import Map from './Map/Map'
import SideBar from './Accordion/SideBar';
import RequestListArray from './RequestListArray';
import { useState, useEffect } from 'react';
import AccordionPersoList from './Accordion/AccordionPersoList'
import AccordionHistoricList from './Accordion/AccordionHistoricList'
import { slide as Menu } from 'react-burger-menu';
import 'leaflet/dist/leaflet.css';


function HomePage() {
    const [data, setData] = useState(RequestListArray);
    const myTaskMenu = <SideBar requestList={RequestListArray} />;



    return (
        <>

            <Menu>
                <div className=''>
                    <AccordionPersoList />
                    <AccordionHistoricList />
                </div>

            </Menu>

            <Map />
        </>

    );
}

export default HomePage;