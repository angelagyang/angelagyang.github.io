import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
      return (
        <div id="contact" className="contactContainer sectionHeader">
            <div className="contactBody">
                <p>Contact</p>
                <ul id="contactList">
                    <li>
                        <a href="https://linkedin.com/in/angelagyang" target="_blank" rel="noreferrer">
                            <img className="linkedInImg" src="images/linkedin.png" alt="LinkedIn"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/angelagyang" target="_blank" rel="noreferrer">
                            <img className="githubImg" src="images/github.png" alt="Github"></img>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:angelagyangg@gmail.com">
                            <img className="emailImg" src="images/email.png" alt="Email"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://angelagyang.wordpress.com/" target="_blank" rel="noreferrer">
                            <img className="wordpressImg" src="images/wordpress.png" alt="Wordpress"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
  }