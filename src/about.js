import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import Page from "./page";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <Page title="ABOUT" backgroundColor="#2FE0A0">
          <p className="about-p">
            There’s something about being under a deadline that generates the
            best ideas. That’s why high school students strategically plan to do
            assignments right at the last minute. At hths.hacks(), we believe
            that tech can change the world, so we’re challenging you to solve a
            problem in 24 hours. COVID-19 might have taken hths.hacks() online,
            but don't worry--we didn't forget about the prizes! You'll get 
            the opportunity to meet some fellow hackers and great sponsors,
            the chance to win some prizes and learn something new. Let’s see what 
            you can create!
          </p>
        </Page>
      </section>
    );
  }
}
