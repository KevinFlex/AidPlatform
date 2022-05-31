import React from 'react';
import { Button } from "bootstrap";
import ThemeTogglerButton from './AuthenticationContext/Authentication';

function Portal() {


    return (
        <div>
            <h1>Welcome to your Aid Platform</h1>
            <h2>From Neighboors To Neighboors</h2>
            <ThemeTogglerButton />
        </div>
    );
}

export default Portal;
