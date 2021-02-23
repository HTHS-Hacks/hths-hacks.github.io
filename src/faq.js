import React, { Component } from "react";
// Add the following two lines
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import Page from "./page";
import "bootstrap/dist/css/bootstrap.css";
import "./background.css";

export default class FAQ extends Component {
  render() {
    return (
      <section id="faq">
        <Page
          title="FAQ"
          style={{ backgroundColor: "#48FADB", color: "#353535" }}
        >
          <Container style={styles.container}>
            {faq.map((chunk) => (
              <Row key={chunk[0].q}>
                {chunk.map((f) => (
                  <Col md="6" key={f.q}>
                    <Card style={styles.cardStyle}>
                      <h2 style={styles.title}>{f.q}</h2>
                      <div style={styles.faqContents}>{f.a}</div>
                    </Card>
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
  container: {
    marginTop: "30px",
  },
  cardStyle: {
    padding: "15px",
    backgroundColor: "#2FE0A0",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    height: "calc(100% - 15px)",
    marginBottom: "15px",
  },
  title: {
    fontSize: "25px",
    fontWeight: 800,
  },
  faqContents: {
    fontSize: "18px",
  },
};

Object.defineProperty(Array.prototype, "chunk_inefficient", {
  value: function (chunkSize) {
    var array = this;
    return [].concat.apply(
      [],
      array.map(function (elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  },
});

const faq = [
  {
    q: "What is a hackathon?",
    a:
      "A hackathon is an event where a team of students can develop anything: a website, an app, or anything else. Let your creativity run wild!",
  },
  {
    q: "How has the pandemic affected hths.hacks()?",
    a:
      "COVID-19 has forced to move hths.hacks() online. But don't worry, we've still got a lot of interested workshops planned, and amazing prizes to give out.",
  },
  {
    q: "How will it work?",
    a:
      "We will have an opening ceremony streamed at twitch.tv/hthshacks, after which we'll start hacking. You can check in to get help or attend one of our workshops. Finally, you'll submit a short video of your product, and we'll judge remotely. Prizes will be sent home.",
  },
  {
    q: "Where can I win?",
    a: (
      <p>
        Hackathons aren't about winning. You have the opportunity to build an
        amazing project, meet other creators like you, and learn through
        workshops. But if you insist, you can find our prizes on{" "}
        <a href="https://hthshacks-20.devpost.com/">Devpost</a>
      </p>
    ),
  },
  {
    q: "Who can attend?",
    a: "Any currently enrolled high school student is welcome to attend.",
  },
  {
    q: "Do I need an idea or a team?",
    a:
      "No! We will be running a team building event and there will be time for you to brainstorm an idea.",
  },
  {
    q: "How do I apply?",
    a:
      "Fill out the form linked above and describe what you hope to get out of hths.hacks(). HTHS students will be given priority.",
  },
  {
    q: "Who runs hths.hacks()?",
    a:
      "hths.hacks() is run by the HTHS Robotics and Coding Club. All of the funding comes from sponsors.",
  },
  {
    q: "How much will it cost me?",
    a: "Absolutely nothing! Just participate and have fun.",
  },
  {
    q: "Any other questions?",
    a: (
      <p>
        Email us at{" "}
        <a href="mailto:contact@hthshacks.com">contact@hthshacks.com</a>
      </p>
    ),
  },
].chunk_inefficient(2);
