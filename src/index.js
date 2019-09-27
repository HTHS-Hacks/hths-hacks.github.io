import React, { Component } from "react";
import ReactDOM from "react-dom";
// Add the following two lines
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import $ from "jquery";
import Home from "./home";
import About from "./about";
import FAQ from "./faq";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar collapseOnSelect bg="dark" expand="lg" fixed="top" style={{}}>
          <Navbar.Brand href="#home">hths.hacks()</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>

              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#sponsors">Sponsors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <Home />
        <About />
        <FAQ />
        <Schedule />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

const styles = {
  navbarWrapper: {
    display: "flex",
    justifyContent: "space-around",
    width: "33.33%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "960px"
  }
};

const mountApp = document.getElementById("app");
ReactDOM.render(<App />, mountApp);
