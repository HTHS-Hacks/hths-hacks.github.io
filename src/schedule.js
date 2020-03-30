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
    l: "Slack #team-formation-brainstorming"
  },
  {
    n: "Workshops (TBD)",
    t: "Sat 2:00 PM - 8:00 PM",
    l: "Slack #announcements"
  },
  { n: "Project Deadline", t: "Sun 12:00 PM", l: "Devpost" },
  { n: "Judging", t: "12:00 PM - 4:00 PM", l: "Online" },
  {
    n: "Closing ceremony + winners",
    t: "4:00 PM",
    l: "Twitch",
    la: "https://www.twitch.tv/hthshacks"
  }
];
