import React from 'react'
import TaskListArray from './TaskListArray'
import { useState } from 'react'


function Counter() {

    const [data, setData] = useState(TaskListArray);
    let counter = 0;

    return (
        <>
            {data.map((task, index) => {

                if (task.isFinished === false) {
                    counter++;
                    return (
                        <div className='my-3 d-block'>
                            <p>Actually</p>
                            <div key={index} className="">{index}</div>
                            <p><strong>tasks to do</strong></p>
                        </div>
                    )
                }

                return null

            })}
        </>
    )
};

export default Counter