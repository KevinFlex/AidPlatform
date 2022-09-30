import React from 'react'
import RequestListArray from './RequestListArray'
import { useState, useEffect } from 'react'


function Counter() {

    const [data, setData] = useState(RequestListArray);
    let counter = 0;

    useEffect(() => {
        //         fetch(`http://localhost:3000/task_list`)
        //       .then(response => {
        //         if (response.ok) {
        //           return response.json();
        //         }
        //         throw response;
        //       })

        //       .then(data => {

        //         console.log(data);
        //         setData(data);
        //       })
        //       .catch((error) => {
        //         console.error("Error fetching data: ", error);
        //         setError(error);
        //       })
        //       .finally(() => {
        //         setLoading(false);
        //       });
        //   }, [])

        //   if (loading) return "Loading...";
        //   if (error) return "Error!";
        //   if (data)

        data.map((request, index) => {
            if (request.length === index) {
                return counter;
            }
            else {
                if (request.isFinished === false) {
                    counter++;
                    index++;
                }
                else {
                    index++;

                }

            }
            setData(data);
        })


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