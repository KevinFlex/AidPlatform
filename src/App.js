import logo from './logo.svg';
import '../src/scss/style.scss';
import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Accordion, Card, Button, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './components/AuthenticationContext/AuthContext';
import Home from './components/Home'
import Footer from './components/Footer'
import Portal from './components/Portal';
import { useState } from 'react'

function App() {

  const [auth, setAuth] = useState(false)
  const authToggle = () => {
    setAuth(!auth)
  }

  return (

    <AuthContext.Provider value={{ auth, authToggle }}>
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Portal />
          <Routes>

            <Route path="/" exact component={Portal} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </ AuthContext.Provider >
  )
}

export default App;
