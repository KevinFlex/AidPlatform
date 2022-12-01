import React, { useState, useEffect } from 'react'
import useInput from '../Hooks/InputHook'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { blueIcon, greenIcon } from './Icon.js'


function PersonalMap() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeRequest, setActiveRequest] = useState(false);
    const { value: requestId, bind: bindRequestId, reset: resetRequestId } = useInput('');
    const { value: userId, bind: bindUserId, reset: resetUserId } = useInput('');

    const navigate = useNavigate();


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
    }, []);


    const handleSubmit = (event, request) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('receiver_id', request.user_id)
        formData.append('request_id', request.id)

        fetch(`/api/conversations/${request.id}`, {
            method: 'POST',
            header: {
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            body: formData

        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
        navigate(`/conversation/${request.id}`);
        resetRequestId();
        resetUserId();
        setActiveRequest(true);
    };



    return (
        <>
            {data.map((request, index) => {
                if (request.fullifiled === false) {
                    if (request.need === "material") {
                    }

                    return (
                        <Marker key={index} position={[request.lat, request.long]} icon={blueIcon}>
                            <Popup><div className='strong'><h4>{request.title}</h4><br /></div>
                                <div><p>{request.description}</p><br />

                                    <button className="btn btn-success mx-auto" onClick={(event) => { handleSubmit(event, request) }}>Apply</button></div></Popup>
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