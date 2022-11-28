import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import RequestListArray from '../RequestListArray'
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from "leaflet"

function GlobalMap() {

    const [data, setData] = useState(RequestListArray)
    const skater = new Icon({
        iconUrl: markerIconPng,
        iconSize: [25, 40]
    });

    const [activeRequest, setActiveRequest] = useState(null);

    return (
        <>
            {data.map((request, index) => {
                if (request.isactive === true) {
                    return (
                        <Marker key={index} className={request.typeRequest} position={[request.position.lat, request.position.lng]} icon={skater}>
                            <Popup onClick={() => {
                                setActiveRequest(request);
                            }}>{request.title}</Popup>
                        </Marker>
                    )
                }
                else return null

            })}
        </>
    )
}

export default GlobalMap;

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

