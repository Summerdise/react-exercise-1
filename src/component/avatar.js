import React, { Component } from 'react';
import avatar from '../assets/avatar.jpg'
import '../styles/avatar.scss';

class Avatar extends Component {
  render() {
    return (
      <img src={avatar} className="icon" />
    );
  }
}

export default Avatar;