import React, { Component } from "react";
// Add the following two lines
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Table
} from "react-bootstrap";
import Page from "./page";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";

export default class Sponsors extends Component {
  render() {
    return (
      <Page
        title="SPONSORS"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container>
          {sponsors1.map(s => (
            <Row>
              <Col lg style={{ display: "flex", justifyContent: "center" }}>
                <img src={s} style={{ objectFit: "cover", width: "75%" }} />
              </Col>
            </Row>
          ))}
          {sponsors2.map(s => (
            <Row>
              {padArray("", s, 2).map(a => (
                <Col lg style={{ display: "flex", justifyContent: "center" }}>
                  {a && (
                    <img src={a} style={{ objectFit: "cover", width: "75%" }} />
                  )}
                </Col>
              ))}
            </Row>
          ))}
          {sponsors3.map(s => (
            <Row>
              {padArray("", s, 3).map(a => (
                <Col lg style={{ display: "flex", justifyContent: "center" }}>
                  {a && (
                    <img src={a} style={{ objectFit: "cover", width: "75%" }} />
                  )}
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </Page>
    );
  }
}

const styles = {
  time: {},
  tableStyle: {
    color: "white",
    fontSize: "25px"
  }
};

const padArray = (val, arr, len) => {
  while (arr.length < len) {
    arr.push(val);
  }
  return arr;
};

const sponsors1 = [
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg"
];
const sponsors2 = [
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg"
].chunk_inefficient(2);
const sponsors3 = [
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg"
].chunk_inefficient(3);
