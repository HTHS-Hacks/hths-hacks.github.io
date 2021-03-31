import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={require("./img/Asset 1.png")}
                style={styles.iconImage}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>May 15-16, 2021</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>
                <a
                  style={{ color: "white", textDecoration: "underline" }}
                  href="mailto:contact@hthshacks.com"
                >
                  contact@hthshacks.com
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>
                <a
                  style={{ color: "white", textDecoration: "underline" }}
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                >
                  MLH Code of Conduct
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <FontAwesomeIcon
                style={styles.socialIcons}
                icon={faTwitter}
                size="2x"
                onClick={() =>
                  (window.location.href = "https://twitter.com/hths_hacks")
                }
              />
              <FontAwesomeIcon
                style={styles.socialIcons}
                icon={faInstagram}
                size="2x"
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/hthshacks/")
                }
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
    backgroundColor: "#08A5D2",
    color: "white",
    fontSize: 20,
  },
  iconImage: {
    maxHeight: "150px",
  },
  socialIcons: {
    marginLeft: 8,
    marginRight: 8,
  },
};
