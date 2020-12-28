import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
      return (
        <div className="homePage">
          <div className="jumbotronImg">
            <div className="homeText">
              <p>
                Hi, I'm Angela!             
              </p>
              <p id="secondText">
                Software Developer
              </p>
              <p>
                <Button href="AngelaYangCV.pdf" target="_blank" className="downloadCvButton" variant="primary" size="lg">Download CV</Button>
              </p>
            </div>
          </div>
        </div>
        )
    }
  }