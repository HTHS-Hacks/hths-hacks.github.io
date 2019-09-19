import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.centerContent}>
          <Container>
            <Row>
              <Col>
                <h1 style={styles.title}>hths.hacks()</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={styles.subtext}>May 16</h2>
              </Col>
            </Row>
            <Row>
              <Col style={styles.buttonStyle}>
                <Button style={styles.buttonStyle} variant="outline-light">
                  Apply
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 56,
    height: "100vh",
    width: "100%",
    background: "rgb(40,66,78)",
    background:
      "linear-gradient(45deg, rgba(40,66,78,1) 0%, rgba(0,212,255,1) 100%)"
  },
  centerContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    color: "white"
  },
  title: {
    fontSize: 60,
    fontWeight: 1000,
    letterSpacing: 8,
    textAlign: "center"
  },
  subtext: {
    color: "white",
    textAlign: "center"
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "center"
  }
};
