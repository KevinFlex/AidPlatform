import React from 'react'
import { useState, useEffect } from 'react'
import RequestListArray from './RequestListArray'


function Counter() {

    const [requests, setRequests] = useState([RequestListArray]);
    let counter = 0;



    useEffect(() => {

        requests.map((request, index) => {
            if (request.length == counter) {
                console.log('index=length');

                return counter;

            }
            else {
                if (request.isFullified === false) {
                    counter++;
                    index++;
                }
                else {
                    index++;
                }

            }
        })
        setRequests(requests);
    }, []);


    return (
        <>
            <div className='my-3 d-block'>
                <p>Actually</p>
                <div className="">{counter}</div>
                <p><strong>tasks to do</strong></p>
            </div>

        </>
    )
};

export default Counter