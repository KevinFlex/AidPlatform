import React from 'react';
import '../App.css';
import Map from './Map'
import SideBar from './Accordion/SideBar';
import TaskListArray from './TaskListArray';
import { useState } from 'react';

function HomePage() {
    const [data, setData] = useState(TaskListArray);
    const myMap = <Map taskList={TaskListArray} />;
    const myTaskMenu = <SideBar taskList={TaskListArray} />;

    return (
        <div>
            {data.map((task, index) => {
                return (
                    <tr hidden>
                        <td key={index}>{index}</td>
                        <td key={index}>{task.typeRequest}</td>
                        <td key={index}>{task.location}</td>
                        <td key={index}>{task.title}</td>
                        <td key={index}>{task.typeTask}</td>
                        <td key={index}>{task.userRequest}</td>
                    </tr>
                )
            })}
            <Map />
            <SideBar />
        </div>
    );
}

export default HomePage;