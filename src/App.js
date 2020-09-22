import React, { Component } from 'react';
import './App.scss';
import Avatar from './component/avatar';
import Title from './component/title';

class App extends Component {
  render() {
    return (
      <main className = "app">
        <Avatar />
        <Title />
      </main>
    );
  }
}

export default App;
