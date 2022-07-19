import React from 'react'


function Table(props) {


    return (
        <table hidden className="table table-striped bordered hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>TypeRequest</th>
                    <th>Location</th>
                    <th>Title</th>
                    <th>TypeTask</th>
                    <th>UserRequest</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.map((task, index) => {
                    return (
                        <tr>
                            <td key={index}>{index}</td>
                            <td key={index}>{task.typeRequest}</td>
                            <td key={index}>{task.location}</td>
                            <td key={index}>{task.title}</td>
                            <td key={index}>{task.typeTask}</td>
                            <td key={index}>{task.userRequest}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

    )
}
export default Table;
