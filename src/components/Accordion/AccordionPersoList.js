import React from 'react'
import RequestListArray from '../RequestListArray'
import { useState } from 'react'

function AccordionPersoList() {

    const [data, setData] = useState(RequestListArray);
    let request = "request";
    let messages = "messages";

    return (
        <>
            {data.map((task, index) => {
                if (request.isPersonal === true) {
                    if (request.isFinished === false) {
                        return (
                            <div className='mb-2 d-block btn btn-primary'>
                                <ul>
                                    <li key={index} className="menu-item">
                                        <a className="mb-3 text-light" href={request / request.id / messages}>
                                            {request.title}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                }

                return null

            })}
        </>
    )
};

export default AccordionPersoList;