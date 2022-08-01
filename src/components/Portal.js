import React from 'react'
import useInput from './Hooks/InputHook'
import { useState } from 'react'
import { AuthContext } from "./AuthenticationContext/AuthContext";
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
                            <div>

                                <h3>Sign Up</h3>
                                <form className='form mb-3' noValidate onSubmit={(e) => { e.preventDefault(); handleSubmit(authToggle, e.target) }}>

                                    <label htmlFor="mail" className="form-label">Email
                                    </label>
                                    <input
                                        id="mail"
                                        className="form-control mb-5"
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
                                        className="form-control mb-5"
                                        name="passWord"
                                        required
                                        type="text"
                                        value={passWord}
                                        {...bindPassWord}
                                    />


                                    <button type="submit" className="btn btn-success">submit</button>

                                </form>
                                <h3>Create an account</h3>
                                <Link to="/newUser">
                                    <button className='btn btn-primary'>Sign In</button>
                                </Link>
                            </div>
                        )}

                    </AuthContext.Consumer>
                </div>
                <div className="col-md-6 col-12 my-5 py-5 heading">
                    <h1>Welcome to your Aid Platform</h1>
                    <h2>From Neighboors To Neighboors</h2>
                    <div className='bg-img bg-portal realtive backgound-center'>
                        <div className='logo absolute top-0 right-0'><img src='../../public/logo.png'></img></div>
                        <div className='max-w-md mx-auto'>
                            <div className='mb-8 text-4xl md:text-5xl font-heading font-bold md:leading-900'></div>
                            <Link to="/home">
                                <button className='btn btn-secondary'>Enter As Visitor</button>
                            </Link>
                        </div>
                    </div>
                </div></div>
        </div>

        </>
    );
};

export default Portal;
