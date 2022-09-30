import React, { useEffect } from 'react'
import useInput from './Hooks/InputHook'
import { useState } from 'react'

function PostTask() {
    const { value: taskType, bind: bindTaskType, reset: resetTaskType } = useInput('');
    const { value: taskTitle, bind: bindTaskTitle, reset: resetTaskTitle } = useInput('');
    const { value: taskDescription, bind: bindTaskDescription, reset: resetTaskDescription } = useInput('');
    const { value: location, bind: bindLocation, reset: resetLocation } = useInput('');

    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();

            alert('Submitting error, all inputs required');
            form.classList.add('was-validated')

        }
        else {

            const data = { taskType, taskTitle, taskDescription, location };

            fetch('', {
                method: 'POST',
                // body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
                .then(response => {
                    if (response.status >= 400) {
                        alert("Your task description must be less than 200 characters")
                    }
                    else {
                        alert("Your task has been submitted !")
                        response.json()
                    }
                })
                .then(data => {
                    console.log(data);
                })
            resetTaskType();
            resetTaskTitle();
            resetTaskDescription();
            resetLocation();
            form.classList.remove('was-validated')

        }
        setValidated(true);

    }
    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
            <label htmlFor='taskType' className="form-label mt-5">Type of the task :
            </label>
            <select
                id="taskType"
                className="form-control mb-5"
                name="taskType"
                required
                type="select"
                value={taskType}
                {...bindTaskType}>

                <option value="material">Material Need</option>
                <option value="help">help</option></select>


            <label htmlFor="taskTitle" className="form-label">Title :
            </label>
            <input
                id="taskTitle"
                className="form-control mb-5"
                name="taskTitle"
                required
                type="text"
                value={taskTitle}
                {...bindTaskTitle}
            />

            <label htmlFor="mail" className="form-label">Description :
            </label>
            <input
                id="taskDescription"
                maxLength="200"
                className="form-control mb-5"
                name="taskDescription"
                required
                type="text"
                value={taskDescription}
                {...bindTaskDescription}
            />

            <label htmlFor="location" className="form-label">Location :
            </label>
            <input
                id="location"
                className="form-control mb-5"
                name="location"
                required
                type="text"
                value={location}
                {...bindLocation}
            />
            <input className="btn-success mb-5 px-3 rounded mt-3" type="submit" value="Send"  {...handleSubmit} />
        </form>

    );
}

export default PostTask;
