import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from "leaflet"
import Cookies from 'js-cookie';


function PersonalMap() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/requests', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }

        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })

            .then(data => {

                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    const skater = new Icon({
        iconUrl: markerIconPng,
        iconSize: [25, 40]
    });

    function onClick(e) {
        alert(e.latlng);
    }
    const [activeRequest, setActiveRequest] = useState(null);

    return (
        <>
            {data.map((request, index) => {
                if (request.fullifiled === false) {
                    return (
                        <Marker key={index} className={request.typeRequest} position={[request.lat, request.long]} icon={skater}>
                            <Popup onClick={() => {
                                setActiveRequest(request);
                            }}>{request.title}</Popup>
                        </Marker>
                    )
                }

            })}
        </>
    )



};

export default PersonalMap;

// import L from 'leaflet';

// const iconPerson = new L.Icon({
//     iconUrl: require('../img/marker-pin-person.svg'),
//     iconRetinaUrl: require('../img/marker-pin-person.svg'),
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(60, 75),
//     className: 'leaflet-div-icon'
// });

// export { iconPerson };