import React from 'react'
import RequestListArray from '../RequestListArray'
import { useState } from 'react'


function AccordionHistoricList() {

    const [data, setData] = useState([]);


    return (
        <>        {data.map((request, index) => {
            if (request.fullifiled === true) {
                return (
                    <div className='mb-2 d-block btn btn-secondary'>

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

        })}</>

    )
};

export default AccordionHistoricList;