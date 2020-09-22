import React, { Component } from 'react';
import '../styles/main.scss';
import '../styles/variables.scss';
import About from './about';
import Educations from './educations.js';

class Content extends Component {
    render() {
        return (
        <div>
            <About />
            <Educations />
        </div>
        );
    }
}

export default Content;