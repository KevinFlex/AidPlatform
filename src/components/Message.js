import React, { useState, useEffect } from 'react'
import SideBar from './Accordion/SideBar';

function Message() {
    const [messages, setMessage] = useState([]);

    return (
        <>
            <SideBar />

            <div className='messages'>
                <div className='message'>
                    <span className='avatar'>S</span>
                    Hello, Can I help ?
                </div>
                <div className='message'>
                    <span className='avatar'>J</span>
                    Sure !
                </div>
            </div>


            <form submit='setMessages'>
                <input placeholder='Type in here'></input>
                <button type='submit'>Send</button>

            </form>


        </>

    )
}

export default Message;