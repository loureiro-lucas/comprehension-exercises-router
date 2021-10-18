import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    return username === 'joao' && password === '1234' ? <Redirect to="/" /> : alert('access denied!')
  }
}

export default StrictAccess;
