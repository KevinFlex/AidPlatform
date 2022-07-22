import React from 'react'
import TaskListArray from '../TaskListArray'
import { useState } from 'react'


function AccordionHistoricList() {

    const [data, setData] = useState(TaskListArray);


    return (
        <>
            {data.map((task, index) => {
                if (task.isPersonal === true) {
                    if (task.isFinished === true) {
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
                }

                return null

            })}
        </>
    )
};

export default AccordionHistoricList;