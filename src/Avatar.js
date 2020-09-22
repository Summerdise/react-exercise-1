import React, { Component } from 'react';
import avatar from './assets/avatar.jpg'
import './styles/Avatar.scss';

class App extends Component {
  render() {
    return (
      <img src={avatar} className="icon" />
    );
  }
}

export default App;