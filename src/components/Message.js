import React, { useState, useEffect } from 'react'


function Message() {
    const [messages, setMessage] = useState([]);

    return (
        <>
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
                <input type={text}></input>
                <button type='submit'>Send</button>

            </form>


        </>

    )

}