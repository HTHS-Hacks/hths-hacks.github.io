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
    t: "Sat 11:30 AM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  { n: "Hacking begins", t: "Sat 12:00 PM", l: "Online" },
  {
    n: "Team formation and brainstorming",
    t: "Sat 12:00 PM",
    l: "#team-formation-brainstorming"
  },
  {
    n: "Intro to Web Development",
    t: "Sat 2:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Chess Tournament",
    t: "Sat 3:00 PM",
    l: "#announcements"
  },
  {
    n: "Intro to Machine Learning",
    t: "Sat 4:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Intro to Github",
    t: "Sat 5:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Intro to Unity",
    t: "Sat 6:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Intro to Python",
    t: "Sat 8:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  },
  {
    n: "Late night movie",
    t: "Sat 11:00 PM",
    l: "#movies"
  },
  { n: "Project Deadline", t: "Sun 12:00 PM", l: "Devpost" },
  { n: "Public voting closes", t: "Sun 3:30 PM", l: "Devpost" },
  { n: "Judging", t: "Sun 12:00 PM - 4:00 PM", l: "Online" },
  {
    n: "Closing ceremony + winners",
    t: "Sun 4:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  }
];
