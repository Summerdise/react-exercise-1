import React, { Component } from 'react';
import './App.scss';
import Avatar from './component/avatar';
import Title from './component/title';
import Content from './component/content';

class App extends Component {
  render() {
    return (
      <main className = "app">
        <Avatar />
        <Title />
        <Content />
      </main>
    );
  }
}

export default App;
