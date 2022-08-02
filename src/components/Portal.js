import React from 'react'
import useInput from './Hooks/InputHook'
import { useState } from 'react'
import { AuthContext } from "./AuthenticationContext/AuthContext";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../src/logo.png'
import Counter from './Counter';

function Portal() {

    const { value: passWord, bind: bindPassWord, reset: resetPassWord } = useInput('');
    const { value: mail, bind: bindMail, reset: resetMail } = useInput('');

    const [validated, setValidated] = useState(false);


    const handleSubmit = (authToggle, form) => {

        if (form.checkValidity() === false) {

            alert('Submitting error, all inputs required');
            form.classList.add('was-validated')

        }
        else {
            const data = { mail, passWord };

            fetch('', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(data => {
                    console.log(data);
                    resetPassWord();
                    resetMail();
                    authToggle();
                })


            form.classList.remove('was-validated')

        }
        setValidated(true);
    }

    return (
        <><div className='container portal'>
            <div className='row'>
                <div className="col-md-6 col-12 px-4 mt-3 registration">
                    <AuthContext.Consumer >
                        {({ authToggle }) => (
                            <>
                                <div className='row bordered-bottom'>

                                    <h3>Sign Up</h3>
                                    <form className='form mb-3' noValidate onSubmit={(e) => { e.preventDefault(); handleSubmit(authToggle, e.target) }}>

                                        <label htmlFor="mail" className="form-label">Email
                                        </label>
                                        <input
                                            id="mail"
                                            className="form-control mb-3"
                                            name="mail"
                                            required
                                            type="text"
                                            value={mail}
                                            {...bindMail}
                                        />
                                        <label htmlFor="passWord" className="form-label">PassWord
                                        </label>
                                        <input
                                            id="passWord"
                                            className="form-control mb-3"
                                            name="passWord"
                                            required
                                            type="text"
                                            value={passWord}
                                            {...bindPassWord}
                                        />


                                        <button type="submit" className="btn btn-success mb-5">submit</button>

                                    </form>
                                </div>
                                <div className="row p-4 registration__border">
                                    <h3 className='mb-3'>Create an account</h3>
                                    <Link to="/newUser">
                                        <button className='btn btn-primary mt-3'>Sign In</button>
                                    </Link>
                                </div>
                            </>

                        )}

                    </AuthContext.Consumer>
                </div>
                <div className="col-md-6 col-12 px-4 mt-5 heading">
                    <h1 className="heading__title mt-3">Welcome to your Aid Platform</h1>
                    <h2 className="heading__title">From Neighbours To Neighbours</h2>
                    <img src="" width="90" height="120" alt="logo" className='my-3 logo__img' />
                    <Counter />
                    <div className='my-5 p-3'>
                        <Link to="/home">
                            <button className='btn btn-primary'>Enter As Visitor</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Portal;
