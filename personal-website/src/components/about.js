import React, { Component } from 'react'

export default class About extends Component {
    render() {
      return (
        <div id="about" className="aboutContainer"> 
            <div className="sectionHeader">
                <p>About </p>
            </div>
            <div className="aboutBody">
                <p>
                    I am a recent graduate from the School of Computer Science at Carnegie Mellon University, where 
                    I obtained a bachelors in Artificial Intelligence. My academic interests include natural language processing, 
                    information retrieval, and distributed systems. I am currently a software developer at Benchling. 
                    In my free time, I enjoy creating digital art, playing video games, and listening to podcasts. Check out my 
                    blog where I share my thoughts on a variety of topics!  
                </p>
                <a href="https://ai.cs.cmu.edu/" target="_blank">
                    <img className="aboutImage" src ='images/cmu.png' alt="Carnegie Mellon University">
                    </img>
                </a>
                
            </div>
        </div>
        )
    }
  }