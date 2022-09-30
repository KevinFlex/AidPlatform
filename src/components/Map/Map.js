import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import PersonalMap from './PersonalMap'
import GlobalMap from './GlobalMap'
import { AuthContext } from '../AuthenticationContext/AuthContext';


function Map() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [locationMe, setLocationMe] = useState([40.00, -105.25]);

    const onSuccess = location => {
        setLocationMe(
            [
                location.coords.latitude,
                location.coords.longitude,
            ])
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onSuccess);
        console.log(locationMe);

    }, []);


    return (
        <>

            <>
                <MapContainer center={locationMe} zoom={12} scrollWheelZoom={true} style={{ height: "100vh" }}>
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
            </>




            <button className=''><a href='/postTask' className='btn btn-primary text-dark taskAdding'> Add a task</a></button>

        </>
    );

}


export default Map;
