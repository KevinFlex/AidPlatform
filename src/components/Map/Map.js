import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import PersonalMap from './PersonalMap'
import GlobalMap from './GlobalMap'
import { AuthContext } from '../AuthenticationContext/AuthContext';


function Map() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const placeholder = [40.00, -105.25];





    return (
        <>
            <AuthContext.Consumer >
                {({ auth }) => (
                    <MapContainer center={placeholder} zoom={12} scrollWheelZoom={true} style={{ height: "100vh" }}>
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

                )}


                <button className=''><a href='/postTask' className='btn btn-primary text-dark taskAdding'> Add a task</a></button>
            </AuthContext.Consumer>

        </>
    );

}


export default Map;
