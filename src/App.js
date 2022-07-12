import logo from './logo.svg';
import '../src/scss/style.scss';
import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Accordion, Card, Button, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './components/AuthenticationContext/AuthContext';
import Home from './components/Home'
import Footer from './components/Footer'
import Portal from './components/Portal';
import { useState } from 'react'
import TaskListArray from './components/TaskListArray';
import Map from './components/Map'
import PostTask from './components/PostTask'

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
          <Routes>
            <Route path="/" element={
              auth ? (
                <Home />
              ) : (
                <Portal />
              )
            } />

            <Route exact path='/home' element={< Home />}></Route>
            <Route exact path='/home' element={< Map taskListArray={TaskListArray} />}></Route>
            <Route path='/postTask' element={< PostTask />}></Route>
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
