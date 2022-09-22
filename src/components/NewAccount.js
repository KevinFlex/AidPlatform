import React, { Component } from "react";
import useInput from './Hooks/InputHook'
import { useState } from 'react'
import { AuthContext } from "./AuthenticationContext/AuthContext";

import FileUploader from './FileUploader'


function NewAccount() {

    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resteLastName } = useInput('');
    const { value: passWord, bind: bindPassWord, reset: resetPassWord } = useInput('');
    const { value: mail, bind: bindMail, reset: resetMail } = useInput('');

    const [validated, setValidated] = useState(false);

    const [file, setFile] = useState()

    const handleSubmit = (authToggle, form) => {
        console.log(authToggle, form)

        if (form.checkValidity() === false) {

            alert('Submitting error, all inputs required');
            form.classList.add('was-validated')
        }
        else {

            const formData = new FormData();
            formData.append('firstName', firstName)
            formData.append('lastName', lastName)
            formData.append('mail', mail)
            formData.append('password', passWord)
            formData.append('file', file)


            fetch('/users', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
                .then(data => data.json())
                .catch(response => {


                    console.log(response);
                    resetFirstName();
                    resteLastName();
                    resetPassWord();
                    resetMail();
                    authToggle();

                })


            form.classList.remove('was-validated')

        }
        setValidated(true);
    }


    return (
        <div className="row">
            <div className="col-md-3 col-0"></div>
            <AuthContext.Consumer >
                {({ authToggle }) => (
                    <div className="col-md-6 col-12">
                        <form className='form mb-3' noValidate onSubmit={(e) => { e.preventDefault(); handleSubmit(authToggle, e.target) }}>
                            <h3>Register</h3>

                            <div className="form-group mt-3">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" value={firstName} {...bindFirstName} />
                            </div>

                            <div className="form-group mt-3">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" value={lastName} {...bindLastName} />
                            </div>

                            <div className="form-group mt-3">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" value={mail} {...bindMail} />
                            </div>

                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" value={passWord} {...bindPassWord} />
                            </div>
                            <div className="m-3">
                                <FileUploader file={setFile} />
                            </div>

                            <button type="submit" className="btn btn-success m-3 btn-lg btn-block">Register</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/">log in?</a>
                            </p>
                        </form>
                    </div>
                )}
            </AuthContext.Consumer>

            <div className="col-md-3 col-0"></div>
        </div>

    );
}


export default NewAccount;