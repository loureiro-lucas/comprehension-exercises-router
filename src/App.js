import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Users"> Users </Link></li>
          <li><Link to="/StrictAccess"> Stric Access </Link></li>
        </ul>
        
        <Switch>
          <Route exact path="/Users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning"/> } />
          <Route exact path="/StrictAccess" render={ () => <StrictAccess user={{ username: 'lucas', password: '1234' }}/>} />
          <Route exact path="/About" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
