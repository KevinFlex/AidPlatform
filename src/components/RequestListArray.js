import React, { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';


function RequestListArray() {
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

    if (loading) return "Loading...";
    if (error) return "Error!";
    if (data)

        return (
            <>
                <ul>{data.map((request, index) => {
                    return (
                        <li key={index}>
                            <p>{request.title}</p>
                            <p>{request.description}</p>
                            <p>{request.lat}</p>
                            <p>{request.long}</p>
                            <p>{request.need}</p>
                            <p>{request.isactive}</p>
                            <p>{request.fullifiled}</p>

                        </li>
                    )
                })}
                </ul></>
        )

}

export default RequestListArray;
