import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
      return (
        <div className="jumbotronContainer" id="home">
          <img className="jumbotronImage" src ='images/angela_home_banner.jpg' alt="Angela Yang">
          </img>
          <div className="jumbotronText">
            <p>
              Hi, I'm Angela!             
            </p>
            <p id="secondText">
              Software eveloper
            </p>
            <p>
              <Button href="AngelaYangCV.pdf" target="_blank" className="downloadCvButton" variant="primary" size="lg">Download CV</Button>
            </p>
          </div>
        </div>
        
        )
    }
  }