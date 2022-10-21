import React, { useEffect } from 'react'
import useInput from './Hooks/InputHook'
import { useState } from 'react'
import Cookies from 'js-cookie';
import UseGeolocation from './Map/UseGeolocation'
import { useLocation } from 'react-router-dom'


function PostRequest() {
    const { value: need, bind: bindNeed, reset: resetNeed } = useInput("material");
    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');
    const { value: lat, bind: bindLat, reset: resetLat } = useInput('');
    const { value: lng, bind: bindLng, reset: resetLng } = useInput('');

    const [validated, setValidated] = useState(false);

    const location = useLocation()
    const { setLatLng } = location.state
    console.log(setLatLng);


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
            formData.append('need', need)
            formData.append('lat', setLatLng.lat)
            formData.append('lng', setLatLng.lng)

            fetch('/api/requests', {
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
            resetNeed();
            resetTitle();
            resetDescription();
            resetLat();
            resetLng();
            form.classList.remove('was-validated')

        }
        setValidated(true);

    }
    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
            <label htmlFor='type' className="form-label mt-5">Type of the task :
            </label>
            <select
                id="need"
                className="form-control mb-5"
                name="need"
                required
                type="select"
                {...bindNeed}>

                <option value="material">material</option>
                <option value="help">help</option>
            </select>


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
            <input
                hidden
                id="lat"
                name="lat"

                value={setLatLng.lat}
                {...bindLat}
            />
            <input
                hidden
                id="lng"
                name="lng"

                value={setLatLng.lng}
                {...bindLng}
            />
            <input className="btn-success mb-5 px-3 rounded mt-3" type="submit" value="Send"  {...handleSubmit} />
        </form>

    );
}

export default PostRequest;
