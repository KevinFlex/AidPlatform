import logo from './logo.svg';
import '../src/scss/style.scss';
import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Accordion, Card, Button, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './components/Authentication';
import { AuthContext } from './components/Context';
import AuthenticatedUser from './components/AuthenticatedUser';
import UnAuthenticatedUser from './components/UnAuthenticatedUser';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  }
  const logout = () => {
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>


      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" exact component={Home} />
            <Authentication />
            <AuthenticatedUser />
            <UnAuthenticatedUser />
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
