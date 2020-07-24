import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div className="about-container">
                <h1>About Me</h1>
                

                <p>Hello!  My name is Abhimanyu Deshpande.  I am currently a student at the University of Michigan, majoring in Computer Science and minoring in Economics. 
                I am interested in researching Data Science concepts such as Natural Language Processing and discovering new machine learning classification algorithms.  Some of 
                my other programming interests include Web Development and I am trying to gain experience in game development currently as well.  Its no secret that currently there is a trade-off between using a person
                to tackle on a specific problem versus using a computer.  For instance, computers are better at crunching numbers and doing raw number data analysis while people are naturally skilled at recognizing 
                patterns.  Because of this, I am drawn to the idea of using designing algorithms to merge this gap, and make computers better trained at recognizing certain types of patterns depending on
                the environments they are in.  This idea has wide ranging implications - from being used in the hospital to organize data and treatments to being used in cars to being used at Wall Street - which
                makes this idea even more enticing to me.
                </p>
                
            </div>
        )
    }
}

export default About;