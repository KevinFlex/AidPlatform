import React from 'react'
import Message from '../Conversation/Message'
import RequestListArray from '../RequestListArray'
import { useState } from 'react'


function AccordionList() {

    const [data, setData] = useState(RequestListArray);
    const [modalVisible, setModalVisible] = useState(false);



    return (
        <>
            {data.map((request, index) => {
                return (
                    <ul>
                        <li key={index} className="menu-item">
                            <a className="mb-3 text-light" onClick={(event) => {
                                event.preventDefault();
                                setModalVisible(true);
                            }} href="#">
                                {request.title}
                            </a>
                        </li>
                    </ul>
                )

            })}
        </>

    )
};

export default AccordionList;

//retourne une liste de lien par map.id=> message de l'id !