import React, { useState, createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    login: () => { },
    logout: () => { }
});

export const ContextProvider = ({ logState }) => {
    const [log, setLog] = useState();

    return (
        <Context.Provider value={{ log, setLog }}>
            {logState}
        </Context.Provider>
    )
}