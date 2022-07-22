import React from 'react';
import '../App.css';
import Map from './Map/Map'
import SideBar from './Accordion/SideBar';
import TaskListArray from './TaskListArray';
import { useState } from 'react';

function HomePage() {
    const [data, setData] = useState(TaskListArray);
    const myMap = <Map taskList={TaskListArray} />;
    const myTaskMenu = <SideBar taskList={TaskListArray} />;

    return (
        <div>

            <Map />
            <SideBar />
        </div>
    );
}

export default HomePage;