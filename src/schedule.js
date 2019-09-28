import React, { Component } from 'react';
// Add the following two lines
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Button,
    Table,
} from 'react-bootstrap';
import Page from './page';
import 'bootstrap/dist/css/bootstrap.css';
import './background.css';

export default class Schedule extends Component {
    render() {
        return (
            <section id="schedule">
                <Page title="SCHEDULE" style={{ backgroundColor: '#595959' }}>
                    <Table style={{ marginTop: '25px' }}>
                        <tbody style={styles.tableStyle}>
                            {schedule.map(event => (
                                <tr>
                                    <td style={styles.time}>{event.t}</td>
                                    <td>{event.n}</td>
                                    <td>{event.l}</td>
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
        color: 'white',
        fontSize: '25px',
    },
};

const schedule = [
    { n: 'Arrival and Check-in', t: '9:00 AM', l: 'Lobby' },
    { n: 'Opening remarks', t: '9:30 AM', l: 'MPR' },
    { n: 'Hacking begins', t: '9:45 AM', l: 'MPR' },
    { n: 'Team formation/brainstorming', t: '9:45 AM', l: 'Research Lobby' },
    { n: 'Workshop (TBD)', t: '11:00 AM', l: 'Research Lobby' },
    { n: 'Lunch', t: '12:00 PM', l: 'MPR' },
    { n: 'Workshop (TBD)', t: '3:00 PM', l: 'Research Lobby' },
    { n: 'Dinner', t: '6:30 PM', l: 'MPR' },
    { n: 'Judging', t: '7:00 PM', l: 'MPR' },
    { n: 'Closing remarks', t: '8:00 PM', l: 'MPR' },
];
