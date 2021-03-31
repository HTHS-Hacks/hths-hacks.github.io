import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./background.sass";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          ...styles.container,
          ...this.props.style
        }}
      >
        <Container>
          <Row>
            <Col style={styles.titleContainer}>
              <h1 style={styles.title}>{this.props.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col style={styles.childCol}>{this.props.children}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 56,
    width: "100%",
    backgroundColor: "#2FE0A0",
    color: "#ffffff"
  },
  title: {
    borderStyle: "solid",
    padding: "15px",
    textAlign: "center",
    borderWidth: "6px",
    fontWeight: 600
  },
  titleContainer: {
    margin: "auto"
  },
  childCol: {
    marginBottom: "30px"
  }
};
