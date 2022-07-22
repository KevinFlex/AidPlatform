import React from 'react'
import Message from '../Message'
import TaskListArray from '../TaskListArray'
import { useState } from 'react'


function AccordionList() {

    const [data, setData] = useState(TaskListArray);


    return (
        <>
            {data.map((task, index) => {
                if (task.isPersonal === false) {
                    return (
                        <ul>
                            <li key={index} className="menu-item">
                                <a className="mb-3 text-light" href="request/{task.id}/messages">
                                    {task.title}
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