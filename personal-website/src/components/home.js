import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
      var styles = {
        //background: no-repeat center center,
        backgroundImage: 'url(images/angela_home.jpg)',
      };
      return (
        <div class="jumbotron" style = {{styles}}>
          <div class="container">
            <h1>Hi, I'm Angela!</h1>
            <p>
            Welcome to my personal website.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
          </div>
        </div>
        )
    }
  }