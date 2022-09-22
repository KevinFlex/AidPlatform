import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import TaskListArray from '../TaskListArray'
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from "leaflet"

function PersonalMap() {

    const [data, setData] = useState(TaskListArray)
    const skater = new Icon({
        iconUrl: markerIconPng,
        iconSize: [25, 40]
    });

    function onClick(e) {
        alert(e.latlng);
    }
    const [activeTask, setActiveTask] = useState(null);

    return (
        <>
            {data.map((task, index) => {
                if (task.isPersonal === true) {
                    if (task.isFinished === false) {
                        return (
                            <Marker key={index} className={task.typeRequest} position={[task.position.lat, task.position.lng]} icon={skater}>
                                <Popup onClick={() => {
                                    setActiveTask(task);
                                }}>{task.title}</Popup>
                            </Marker>
                        )
                    }
                    else return null
                }
                else return null

            })}
        </>
    )



}

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