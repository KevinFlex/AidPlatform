import React, { useState, useCallBack } from 'react'


function Conversation() {
    const [messages, setMessages] = useState([]);

    const fetchData = useCallBack(async newMessage => {
        const url = `http`
    })
    // fetch('/api/conversations/'

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