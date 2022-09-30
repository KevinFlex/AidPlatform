import React from 'react';
import '../App.css';
import Map from './Map/Map'
import SideBar from './Accordion/SideBar';
import TaskListArray from './RequestListArray';
import { useState, useEffect } from 'react';
import AccordionList from './Accordion/AccordionList'
import AccordionPersoList from './Accordion/AccordionPersoList'
import AccordionHistoricList from './Accordion/AccordionHistoricList'
import { AuthContext } from './AuthenticationContext/AuthContext';
import { slide as Menu } from 'react-burger-menu';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import PersonalMap from './Map/PersonalMap'
import GlobalMap from './Map/GlobalMap'

function HomePage() {
    const [data, setData] = useState(TaskListArray);
    const myTaskMenu = <SideBar taskList={TaskListArray} />;



    return (
        <AuthContext.Consumer >

            <>
                <Menu>
                    <div className=''>
                        <AccordionPersoList />
                        <AccordionHistoricList />
                    </div>

                </Menu>

                <Map />
                {/* {auth
                        ? <PersonalMap />
                        : <GlobalMap />
                    } */}


            </>


        </AuthContext.Consumer>

    );
}

export default HomePage;