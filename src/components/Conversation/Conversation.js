import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';



function Conversation() {
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    let { convId } = useParams();

    useEffect(() => {
        fetch(`/api/conversations/${convId}/messages`, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }

        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })

            .then(data => {

                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    return (
        <>
            <div>
                <ul className="conversation__messages text-center">
                    {messages.map((item, index) => (<li key={index} className="">

                        <p>{ }</p>

                    </li>))}

                </ul>

                <button variant="contained">
                    Send
                </button>
            </div>
        </>

    );
};
export default Conversation; 