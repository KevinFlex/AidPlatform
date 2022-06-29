import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import TaskListArray from './TaskListArray'
import 'leaflet/dist/leaflet.css';


function Map() {

    const [data, setData] = useState(TaskListArray);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const placeholder = [40.00, -105.25]

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
        <MapContainer center={placeholder} zoom={12} scrollWheelZoom={false} style={{ height: "100vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((task, index) => {
                return (
                    <Marker key={index} position={[task.lat, task.lng]}>
                        <Popup>{task.firstName} {task.lastName}</Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )

}


export default Map;

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
