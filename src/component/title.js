import React, { Component } from 'react';
import '../styles/main.scss';
import '../styles/variables.scss';

class Title extends Component {
    render() {
        return (
            <div>
                <h1 className = "introduce">HELLO,</h1>
                <h2 className = "introduce">MY NAME IS KAMIL 24YO AND THIS IS MY RESUME</h2>
                <hr/>
            </div>
        );
    }
}

export default Title;