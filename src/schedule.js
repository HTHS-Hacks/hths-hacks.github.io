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

export default class Schedule extends Component {
  render() {
    return (
      <section id="schedule">
        <Page title="SCHEDULE" style={{ backgroundColor: "#595959", color: "white" }}>
          <Table
            responsive
            style={{
              marginTop: "25px",
              width: "100%",
              tableLayout: "fixed"
            }}
          >
            <tbody style={styles.tableStyle}>
              {schedule.map(event => (
                <tr key={event.n + event.t}>
                  <td style={styles.time}>{event.t}</td>
                  <td>{event.n}</td>
                  <td>
                    {event.la ? <a style={styles.linkStyle} href={event.la}>{event.l}</a> : event.l}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Page>
      </section>
    );
  }
}

const styles = {
  time: {},
  tableStyle: {
    color: "white",
    fontSize: "20px"
  },
  linkStyle: {
    color: "#F6FF36"
  }
};

const schedule = [
  {
    n: "Opening ceremony",
    t: "Sat 11:30 AM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  { 
    n: "Hacking begins", 
    t: "Sat 12:00 PM EST", 
    l: "Online" 
  },
  {
    n: "Team formation and brainstorming",
    t: "Sat 12:00 PM EST",
    l: "#team-formation-brainstorming"
  },
  {
    n: "Workshop 1",
    t: "Sat 2:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Chess Tournament",
    t: "Sat 3:00 PM EST",
    l: "#chess-tourney"
  },
  {
    n: "Workshop 2",
    t: "Sat 3:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Workshop 3",
    t: "Sat 5:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Slideshow Karaoke",
    t: "Sat 5:00 PM EST",
    l: "#slideshow-karaoke"
  },
  {
    n: "Workshop 4",
    t: "Sat 6:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "AR Workshop ft. EchoAR",
    t: "Sat 7:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Workshop 5",
    t: "Sat 8:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  { 
    n: "Project Deadline", 
    t: "Sun 12:00 PM EST", 
    l: "Devpost", 
    la:"https://hthshacks-21.devpost.com/" 
  },
  { 
    n: "Public voting closes", 
    t: "Sun 3:30 PM EST", 
    l: "Devpost", 
    la:"https://hthshacks-21.devpost.com/" 
  },
  {
    n: "Q&A With Software Developer",
    t: "Sun 3:30 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks",
  },
  { 
    n: "Judging", 
    t: "Sun 12:00 PM - 5:00 PM EST", 
    l: "Online" 
  },
  { 
    n: "Project Demos", 
    t: "Sun 12:00 PM - 5:00 PM EST", 
    l: "#demo" 
  },
  {
    n: "Closing ceremony + winners",
    t: "Sun 5:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  }
];
