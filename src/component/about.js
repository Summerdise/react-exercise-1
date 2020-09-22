import React, { Component } from 'react';
import '../styles/about.scss'
import '../styles/main.scss';
import '../styles/variables.scss';


class About extends Component {
    render() {
        return (
            <div>
                <h1 className="about">ABOUT ME</h1>
                <p className="about_content">
                    Lorem ipsum dolor sit amet,consectetur adipisicing
                    elit.Repellendus,non,dolorem,cumque distinctio magni quam expedita velit
                    laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem
                    dolorum!Quasi
                </p>
            </div>
        );
    }
}

export default About;