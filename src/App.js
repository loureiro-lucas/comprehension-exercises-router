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
        <Route exact path="/About" component={ About } />
        <Route exact path="/Users" render={ () => <Users greetingsMessage="Good Morning"/> } />

        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Users"> Users </Link></li>
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
