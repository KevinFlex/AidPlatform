import React from 'react'
import RequestListArray from '../RequestListArray'
import { useState } from 'react'


function AccordionHistoricList() {

    const [data, setData] = useState(RequestListArray);


    return (
        <>
            {data.map((request, index) => {
                if (request.isPersonal === true) {
                    if (request.isFinished === true) {
                        return (
                            <div className='mb-2 d-block btn btn-secondary'>

                                <ul>
                                    <li key={index} className="menu-item">
                                        <a className="mb-3 text-light" href="request/{task.id}/messages">
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

export default AccordionHistoricList;