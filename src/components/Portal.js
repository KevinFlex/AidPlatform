import React from 'react'
import useInput from './Hooks/InputHook'
import { useState } from 'react'
import { AuthContext } from "./AuthenticationContext/AuthContext";

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

    );
};

export default Portal;
