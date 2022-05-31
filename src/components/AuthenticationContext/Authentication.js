import React from 'react'
import { AuthContext } from "./AuthContext";

export default function AuthTogglerButton() {

    function AuthTogglerButton(authToggle) {

        authToggle()

    }


    return (
        <AuthContext.Consumer >
            {({ authToggle }) => (
                <button
                    onClick={AuthTogglerButton(authToggle)}
                >Submit
                </button>
            )}
        </AuthContext.Consumer>
    )
}