import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/About" component={ About } />
          <Route exact path="/Users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning"/> } />
        </Switch>
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
