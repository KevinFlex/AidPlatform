import logo from './logo.svg';
import '../src/scss/style.scss';
import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import { Accordion, Card, Button, Navbar } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './components/authentication';
import { AuthContext } from './context';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  }
  const logout = () => {
    setLoggedIn(false);
  }

  return (

    <AuthContext.Provider value={isLoggedIn: isLoggedIn, login: login, logout: logout}>
      <div class="center">
      <Authentication />
      <ProtectedResource />
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
    </div>
    <AuthContext.Provider />

  )
}

export default App;
