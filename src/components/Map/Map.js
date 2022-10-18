import React, { useState, useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import PersonalMap from './PersonalMap'
import GlobalMap from './GlobalMap'
import UseGeolocation from './UseGeolocation'
import { AuthContext } from '../AuthenticationContext/AuthContext';


function Map() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [latLng, setLatLng] = useState(null);


    return (

        // <>

        //     <>
        <MapContainer center={[40.00, 51.25]} zoom={12} scrollWheelZoom={true} style={{ height: "100vh" }}>
            <UseGeolocation />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="topright" />
            <AuthContext.Consumer >

                {auth => auth
                    ? (<PersonalMap />)
                    : (<GlobalMap />)}
            </AuthContext.Consumer>

        </MapContainer>
        //     </>




        //     <button className=''><a href='/postTask' className='btn btn-primary text-dark taskAdding'> Add a task</a></button>

        // </>

    )

}


export default Map;
