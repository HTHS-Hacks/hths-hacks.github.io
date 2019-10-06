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
import { faCentercode } from '@fortawesome/free-brands-svg-icons';

export default class Sponsors extends Component {
    render() {
        return (
            <section id="sponsors">
                <Page
                    title="SPONSORS"
                    style={{ backgroundColor: 'white', color: 'black' }}
                >
                    <Container>
                        <Row>
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
                        {sponsors1.map(s => (
                            <Row>
                                <Col
                                    xs
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={s}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                        }}
                                    />
                                </Col>
                            </Row>
                        ))}
                        {sponsors2.map(s => (
                            <Row>
                                {padArray('', s, 2).map(a => (
                                    <Col
                                        xs
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {a && (
                                            <img
                                                src={a}
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                }}
                                            />
                                        )}
                                    </Col>
                                ))}
                            </Row>
                        ))}
                        {sponsors3.map(s => (
                            <Row>
                                {padArray('', s, 3).map(a => (
                                    <Col
                                        xs
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {a && (
                                            <img
                                                src={a}
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                }}
                                            />
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
        color: 'white',
        fontSize: '25px',
    },
    sponsorInterest: {
        textAlign: 'center',
        fontSize: '20px',
    },
};

const padArray = (val, arr, len) => {
    while (arr.length < len) {
        arr.push(val);
    }
    return arr;
};

const sponsors1 = [];
const sponsors2 = [].chunk_inefficient(2);
const sponsors3 = ['/bugsee.png'].chunk_inefficient(3);
