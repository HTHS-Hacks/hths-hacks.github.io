import React, { Component } from "react";
// Add the following two lines
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import Page from "./page";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";
import { faCentercode } from "@fortawesome/free-brands-svg-icons";

export default class Sponsors extends Component {
  render() {
    return (
      <section id="sponsors">
        <Page
          title="SPONSORS"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Container>
            {/* <Row>
                            <Col>
                                <p style={styles.sponsorInterest}>
                                    Interested in sponsoring? See our{' '}
                                    <a href="sponsor_packet.pdf">
                                        sponsor packet
                                    </a>{' '}
                                    and reach out to us at{' '}
                                    <a href="mailto:sponsor@hthshacks.com">
                                        sponsor@hthshacks.com
                                    </a>
                                    .
                                </p>
                            </Col>
                        </Row> 
            <Row>
              <Col>
                <div style={styles.smallHeader}>Partners</div>
              </Col>
            </Row>
            {partners.map((s) => (
              <Row>
                <Col
                  xs
                  key={s.i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={s.l}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={s.i}
                      style={{
                        objectFit: "cover",
                        width: "80%",
                        margin: "10px",
                        alignSelf: "center",
                      }}
                    />
                  </a>
                </Col>
              </Row>
            ))}
            <Row>
              <Col>
                <div style={styles.smallHeader}>Sponsors</div>
              </Col>
            </Row>*/}
            {sponsors1.map((s) => (
              <Row>
                <Col
                  xs
                  key={s.i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    href={s.l}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={s.i}
                      style={{
                        objectFit: "cover",
                        width: "80%",
                        margin: "10px",
                        alignSelf: "center",
                      }}
                    />
                  </a>
                </Col>
              </Row>
            ))}
            {sponsors2.map((s) => (
              <Row>
                {padArray("", s, 2).map((a) => (
                  <Col
                    xs
                    key={a.i}
                    float
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    {a && (
                      <a href={a.l}>
                        <img
                          src={a.i}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </a>
                    )}
                  </Col>
                ))}
              </Row>
            ))}
            {sponsors3.map((s) => (
              <Row>
                {padArray("", s, 3).map((a) => (
                  <Col
                    xs
                    key={a.i}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    {a && (
                      <a href={a.l}>
                        <img
                          src={a.i}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </a>
                    )}
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
        </Page>
      </section>
    );
  }
}

const styles = {
  time: {},
  tableStyle: {
    color: "#034A5E",
    fontSize: "25px",
  },
  sponsorInterest: {
    textAlign: "center",
    fontSize: "20px",
  },
  smallHeader: {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: 900,
    margin: "20px",
  },
};

const padArray = (val, arr, len) => {
  while (arr.length < len) {
    arr.push(val);
  }
  return arr;
};

const partners = [
  { i: "/hths.png", l: "http://www.hths.mcvsd.org/" },
  { i: "/mlh.png", l: "https://mlh.io/" },
];

const sponsors1 = [
  { i: "/hths.png", l: "http://www.hths.mcvsd.org/" }
  /*{ i: "/1517.png", l: "https://www.1517fund.com/" }*/
];
const sponsors2 = [
  /*{ i: "/echoar.png", l: "https://www.echoar.xyz/" },
  { i: "/balsamiq.png", l: "https://balsamiq.com/" },*/
].chunk_inefficient(2);
const sponsors3 = [
  { i: "/wolfram.png", l: "https://www.wolfram.com/" },
  { i: "/sashido.png", l: "https://www.sashido.io/en/" },
  { i: "/echoar.png", l: "https://www.echoar.xyz/" },
  /*{ i: "/bugsee.png", l: "https://www.bugsee.com/" },*/
  /*{ i: "/aops.jpg", l: "https://artofproblemsolving.com/" },
  { i: "/1password.png", l: "https://1password.com/" },
  { i: "/cloudsploit.png", l: "https://cloudsploit.com/" },
  { i: "/jdd.png", l: "https://www.jdjfoundation.org/" },
  { i: "/hyperx.png", l: "https://www.hyperxgaming.com/" },
  { i: "/upperline.png", l: "https://www.upperlinecode.com/" },*/
].chunk_inefficient(3);
