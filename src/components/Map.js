import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import TaskListArray from './TaskListArray'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";


function LocationMarker() {

    const [data, setData] = useState(TaskListArray);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const placeholder = [40.00, -105.25]


    const [activeTask, setActiveTask] = useState(null);
    const skater = new Icon({
        iconUrl: markerIconPng,
        iconSize: [25, 40]
    });


    // useEffect(() => {

    //     fetch()
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             throw response;
    //         })

    //         .then(data => {

    //             console.log(data);
    //             setData(data);
    //         });
    // }, [])


    return (
        <>
            <MapContainer center={placeholder} zoom={12} scrollWheelZoom={false} style={{ height: "100vh" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="topright" />
                {data.map((task, index) => {
                    return (
                        <Marker key={index} className={task.city} position={[task.lat, task.lng]} icon={skater}>
                            <Popup onClick={() => {
                                setActiveTask(task);
                            }}>{task.firstName} {task.lastName}</Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
            <button className=''><a href='/postTask' className='btn btn-primary text-dark taskAdding'> Add a task</a></button>
        </>
    )

}


export default LocationMarker;

// useEffect(() => {
//     fetch('fetch')
//         .get('data.json')
//         .then(response => {
//             if (response.ok) {
//                 return response.data();
//             }
//             throw response;
//         })

//         .then(data => {

//             console.log(data);
//             setData(data);
//         })
//         .catch((error) => {
//             console.error("Error fetching data: ", error);
//             setError(error);
//         })
//         .finally(() => {
//             setLoading(false);
//         });
// }, [])

// if (loading) return "Loading...";
// if (error) return "Error!";
// if (data)
