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
    { n: 'Event 1', t: '7:45 AM', l: 'MPR' },
    { n: 'Event 1', t: '7:45 AM', l: 'MPR' },
    { n: 'Event 1', t: '7:45 AM', l: 'MPR' },
    { n: 'Event 1', t: '7:45 AM', l: 'MPR' },
];
