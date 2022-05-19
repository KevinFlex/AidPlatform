import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';


<Router>
    <div className="App">
        <header>
            <Navbar />
        </header>
        <Routes>
            <Route path="/" exact component={Home} />
        </Routes>
        <footer>
            <Footer />
        </footer>
    </div>
</Router>