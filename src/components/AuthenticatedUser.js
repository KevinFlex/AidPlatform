import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';

import react, { useContext } from 'react'
import { AuthContext } from "./context";

export default function AuthenticatedUser() {
    const authContext = useContext(AuthContext);

    return authContext.isLoggedIn && <h2>Protected resource</h2>;
}


