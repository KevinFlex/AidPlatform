import React, { useEffect } from 'react'
import useInput from './Hooks/InputHook'
import { useState } from 'react'
import Cookies from 'js-cookie';
import UseGeolocation from './Map/UseGeolocation'

function PostTask() {
    const { value: type, bind: bindType, reset: resetType } = useInput('');
    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');

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

            const formData = new FormData();
            formData.append('title', title)
            formData.append('description', description)
            formData.append('type', type)
            formData.append('lat', lat)
            formData.append('lng', lng)

            fetch('/api/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                },
                body: formData
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
            resetType();
            resetTitle();
            resetDescription();
            form.classList.remove('was-validated')

        }
        setValidated(true);

    }
    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
            <label htmlFor='type' className="form-label mt-5">Type of the task :
            </label>
            <select
                id="type"
                className="form-control mb-5"
                name="type"
                required
                type="select"
                value={type}
                {...bindType}>

                <option value="material">Material Need</option>
                <option value="help">help</option></select>


            <label htmlFor="title" className="form-label">Title :
            </label>
            <input
                id="title"
                className="form-control mb-5"
                name="title"
                required
                type="text"
                value={title}
                {...bindTitle}
            />

            <label htmlFor="mail" className="form-label">Description :
            </label>
            <input
                id="description"
                maxLength="200"
                className="form-control mb-5"
                name="description"
                required
                type="text"
                value={description}
                {...bindDescription}
            />



            {/* <label htmlFor="location" className="form-label">Location :
            </label>
            <input
                id="location"
                className="form-control mb-5"
                name="location"
                required
                type="text"
                value={location}
                {...bindLocation}
            /> */}
            <input className="btn-success mb-5 px-3 rounded mt-3" type="submit" value="Send"  {...handleSubmit} />
        </form>

    );
}

export default PostTask;
