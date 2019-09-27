import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Container>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={require("./img/Asset 1.png")}
                style={styles.iconImage}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>May 16, 2020</p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 30
              }}
            >
              <FontAwesomeIcon
                style={styles.socialIcons}
                icon={faTwitter}
                size="2x"
              />
              <FontAwesomeIcon
                style={styles.socialIcons}
                icon={faFacebook}
                size="2x"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20,
    width: "100%",
    backgroundColor: "#090a0f",
    color: "white",
    fontSize: 20
  },
  iconImage: {
    maxHeight: "150px"
  },
  socialIcons: {
    marginLeft: 8,
    marginRight: 8
  }
};
