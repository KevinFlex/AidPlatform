import React from 'react';
import '../App.css';
import Map from './Map/Map'
import SideBar from './Accordion/SideBar';
import TaskListArray from './TaskListArray';
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
    const myMap = <Map taskList={TaskListArray} />;
    const myTaskMenu = <SideBar taskList={TaskListArray} />;

    const placeholder = [40.00, -105.25];


    return (
        <AuthContext.Consumer >

            {({ auth }) => (
                <>
                    <Menu>
                        {auth
                            ? <div className=''>
                                <AccordionPersoList />
                                <AccordionHistoricList />
                            </div>

                            : <AccordionList />
                        }
                    </Menu>

                    <MapContainer center={placeholder} zoom={12} scrollWheelZoom={false} style={{ height: "100vh" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ZoomControl position="topright" />

                        {auth
                            ? <PersonalMap />
                            : <GlobalMap />
                        }

                    </MapContainer>

                </>

            )}

        </AuthContext.Consumer>

    );
}

export default HomePage;