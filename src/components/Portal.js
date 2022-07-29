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
        <>
            <div className="w-full md:w-1/2 px-4 lg:mb-0">
                <AuthContext.Consumer >
                    {({ authToggle }) => (
                        <div>
                            <h1>Welcome to your Aid Platform</h1>
                            <h2>From Neighboors To Neighboors</h2>

                            <form className='form' noValidate onSubmit={(e) => { e.preventDefault(); handleSubmit(authToggle, e.target) }}>

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


                                <button type="submit">submit</button>

                            </form>
                        </div>
                    )}

                </AuthContext.Consumer>
            </div>
            <div className="w-full md:w-1/2 px-4">
                <div className='bg-img bg-portal realtive backgound-center'>
                    <div className='logo absolute top-0 right-0 -mt-6 -mr-6 lg:mt-12 lg:mr-12 w-20 z-10 lg:w-auto'></div>
                    <div className='max-w-md mx-auto'>
                        <div className='mb-8 text-4xl md:text-5xl font-heading font-bold md:leading-900'></div>
                        <Link to="/home">
                            <button className='mt-3 relative inline-flex items-center justify-center py-3 px-7 h-14 md:w-auto text-lg leading-7 text-green-50 gb-green-50 hover:bg-green-700 font-medium focus:rising-green-500 focus:rising-opacity-50 border border-transparent rounded-md shadow-sm'>Enter As Visitor</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portal;
