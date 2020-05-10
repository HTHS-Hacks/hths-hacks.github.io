import React, { Component } from "react";
// Add the following two lines
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container} id="home-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div style={styles.centerContent}>
          <Container>
            <Row>
              <Col>
                <img
                  src={require("./img/Asset 1.png")}
                  style={styles.iconImage}
                  id="home-image"
                />
                <img
                  src={require("./img/Asset 2.png")}
                  style={styles.mainImg}
                  id="home-image"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={styles.subtext}>May 16-17</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 style={styles.subtextImportant}>
                  <b>Registration is open until May 14th!</b>
                  <br />
                  Discord invites have been sent. Please email
                  contact@hthshacks.com if you did not get one.
                </h2>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div>
                  <Button
                    style={styles.buttonStyle}
                    id="apply-button"
                    variant="dark"
                    size="lg"
                    className="p-3"
                    block
                    onClick={() =>
                      (window.location.href =
                        "https://forms.gle/uEsE7FYZmuDtTmuP9")
                    }
                  >
                    Register by May 14th
                  </Button>
                </div>
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
    width: "100%"
  },
  centerContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    color: "#4a86e8",
    width: "75%"
  },
  title: {
    fontSize: 60,
    fontWeight: 1000,
    letterSpacing: 8,
    textAlign: "center"
  },
  subtext: {
    color: "#4a86e8",
    textAlign: "center"
  },
  subtextImportant: {
    color: "#4a86e8",
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    color: "black",
    outlineColor: "#FED866",
    borderColor: "#FED866",
    fontWeight: 900,
    fontSize: "28px",
    backgroundColor: "#FED866"
  },
  mainImg: {
    width: "100%"
  },
  iconImage: {
    maxHeight: "200px",
    margin: "auto",
    display: "block"
  }
};
