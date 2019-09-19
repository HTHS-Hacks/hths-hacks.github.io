import React, { Component } from "react";
import ReactDOM from "react-dom";
// Add the following two lines
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import $ from "jquery";
import Home from "./home";

class App extends Component {
  componentDidMount() {
    $(window).scroll(function() {
      // Change int to configure how many pixels must be scrolled before navbar
      // appears
      if ($(this).scrollTop() > 100) {
        $(".navbar").fadeIn();
      } else {
        $(".navbar").fadeOut();
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top" style={{ display: "none" }}>
          <Navbar.Brand href="#home">hths.hacks()</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#details">Details</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Home />
        <Home />
      </div>
    );
  }
}

const mountApp = document.getElementById("app");
ReactDOM.render(<App />, mountApp);
