import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        <Route path="/Users" component={ Users } />

        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Users"> Users </Link>
      </BrowserRouter>
    );
  }
}

export default App;
