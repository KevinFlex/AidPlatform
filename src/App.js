import logo from './logo.svg';
import '../src/scss/style.scss';
import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import { Accordion, Card, Button, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
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
  );
}

export default App;
