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
        <Page title="SCHEDULE" style={{ backgroundColor: "#595959" }}>
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
                    {event.la ? <a href={event.la}>{event.l}</a> : event.l}
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
  }
};

const schedule = [
  {
    n: "Opening ceremony",
    t: "Sat 11:30 AM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  { n: "Hacking begins", t: "Sat 12:00 PM EST", l: "Online" },
  {
    n: "Team formation and brainstorming",
    t: "Sat 12:00 PM EST",
    l: "#team-formation-brainstorming"
  },
  { n: "CTF starts", t: "Sat 12:00 PM EST", l: "#announcements" },
  {
    n: "Intro to Web Development",
    t: "Sat 2:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Chess Tournament",
    t: "Sat 3:00 PM EST",
    l: "#announcements"
  },
  {
    n: "Intro to Alexa",
    t: "Sat 3:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Intro to Machine Learning",
    t: "Sat 4:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Intro to Github",
    t: "Sat 5:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Slideshow Karaoke",
    t: "Sat 5:00 PM EST",
    l: "#announcements",
  },
  {
    n: "Intro to Unity",
    t: "Sat 6:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Build a Cloud-Connected AR/VR App in 15 Minutes or Less",
    t: "Sat 7:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Intro to Firebase",
    t: "Sat 8:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  { n: "Project Deadline", t: "Sun 12:00 PM EST", l: "Devpost" },
  { n: "Public voting closes", t: "Sun 3:30 PM EST", l: "Devpost" },
  { n: "Judging", t: "Sun 12:00 PM - 4:00 PM EST", l: "Online" },
  { n: "CTF ends", t: "Sun 3:45 PM EST", l: "#announcements" },
  {
    n: "Closing ceremony + winners",
    t: "Sun 4:00 PM EST",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  }
];
