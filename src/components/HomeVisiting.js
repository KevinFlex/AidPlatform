import React from 'react'
import '../App.css'
import SideBar from './Accordion/SideBar'
import RequestListArray from './RequestListArray'
import { useState } from 'react'
import AccordionList from './Accordion/AccordionList'

import { slide as Menu } from 'react-burger-menu'
import Map from './Map/Map'

function HomeVisitingPage() {
    const [data, setData] = useState(RequestListArray);
    const myTaskMenu = <SideBar taskList={RequestListArray} />;



    return (
        <>
            <Menu>
                <AccordionList />
            </Menu>

            <Map />
        </>

    );
}

export default HomeVisitingPage;