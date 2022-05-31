import React from 'react';

export const AuthContext = React.createContext({

    auth: false,
    authToggle: () => { },
});



// export default function ContextProvider() {

//     const [isloggedIn, setIsLoggedIn] = useState(false);
//     const login = () => {
//         setLoggedIn(true);
//     }
//     const logout = () => {
//         setLoggedIn(false);
//     }

//     return (
//         <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//             {logState}
//         </Context.Provider>
//     )
// }