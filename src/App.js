import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

//Import Components
import Navbar from './NavBar/Navbar.js'
import Dashboard from './Dashboard/Dashboard.js'
import About from './About/About.js'
import Login from './Account/Login.js'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
