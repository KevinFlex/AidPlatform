import React from 'react'
import Message from '../Message'

function AccordionList() {


    return (
        <ul>
            <li>
                <a className='menu-item' href="/message">
                    TAskList1
                </a>
            </li>
            <li>
                <a className='menu-item' href="/">
                    TAskList2
                </a>
            </li>
            <li>
                <a className='menu-item' href="/">
                    TAskList3
                </a>
            </li>
        </ul>
    )
};

export default AccordionList;

//retourne une liste de lien par map.id=> message de l'id !