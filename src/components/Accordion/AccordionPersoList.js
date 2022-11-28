import React from 'react'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie';


function AccordionPersoList() {

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



    return (
        <div>
            {data.map((request, index) => {

                if (request.fullifiled === false) {
                    return (
                        <div className='mb-2 d-block btn btn-primary'>
                            <ul>
                                <li key={index} className="menu-item">
                                    <a className="mb-3 text-light">
                                        {request.title}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )
                }

            })}
        </div>
    )
};

export default AccordionPersoList;