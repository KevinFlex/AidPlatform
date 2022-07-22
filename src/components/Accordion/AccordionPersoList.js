import React from 'react'
import TaskListArray from '../TaskListArray'
import { useState } from 'react'

function AccordionPersoList() {

    const [data, setData] = useState(TaskListArray);
    let request = "request";
    let messages = "messages";

    return (
        <>
            {data.map((task, index) => {
                if (task.isPersonal === true) {
                    if (task.isFinished === false) {
                        return (
                            <ul>
                                <li key={index} className="menu-item">
                                    <a className="mb-3 text-light" href={request / task.id / messages}>
                                        {task.title}
                                    </a>
                                </li>
                            </ul>
                        )
                    }
                }

                return null

            })}
        </>
    )
};

export default AccordionPersoList;