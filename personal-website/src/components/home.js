import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
      return (
        <div className="homePage">
          <div className="jumbotronImg">
            <div className="homeText">
              <h1>Hi, I'm Angela!</h1>
              <p>
                Welcome to my personal website.
              </p>
              <p>
                <Button className="downloadCvButton" variant="primary">Download CV</Button>
              </p>
            </div>
          </div>
        </div>
        )
    }
  }