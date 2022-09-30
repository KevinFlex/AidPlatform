import React from 'react'
import Message from '../Message'
import RequestListArray from '../RequestListArray'
import { useState } from 'react'


function AccordionList() {

    const [data, setData] = useState(RequestListArray);


    return (
        <>
            {data.map((request, index) => {
                if (request.isPersonal === false) {
                    return (
                        <ul>
                            <li key={index} className="menu-item">
                                <a className="mb-3 text-light" href="request/{task.id}/messages">
                                    {request.title}
                                </a>
                            </li>
                        </ul>
                    )
                }
                return null

            })}
        </>

    )
};

export default AccordionList;

//retourne une liste de lien par map.id=> message de l'id !