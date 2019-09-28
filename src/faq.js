import React, { Component } from 'react';
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
} from 'react-bootstrap';
import Page from './page';
import 'bootstrap/dist/css/bootstrap.css';
import './background.css';

export default class FAQ extends Component {
    render() {
        return (
            <section id="faq">
                <Page
                    title="FAQ"
                    style={{ backgroundColor: '#ffd966', color: 'black' }}
                >
                    <Container style={styles.container}>
                        {faq.map(chunk => (
                            <Row>
                                {chunk.map(f => (
                                    <Col md="6">
                                        <Card style={styles.cardStyle}>
                                            <h2 style={styles.title}>{f.q}</h2>
                                            <p style={styles.faqContents}>
                                                {f.a}
                                            </p>
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
        marginTop: '30px',
    },
    cardStyle: {
        padding: '15px',
        backgroundColor: '#f7f7f5',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        marginBottom: '15px',
    },
    title: {
        fontSize: '25px',
        fontWeight: 800,
    },
    faqContents: {
        fontSize: '18px',
    },
};

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function(chunkSize) {
        var array = this;
        return [].concat.apply(
            [],
            array.map(function(elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    },
});

const faq = [
    {
        q: 'What is a hackathon?',
        a:
            'A hackathon is an event where a team of students can develop anything: a website, an app, or anything else. Let your creativity run wild!',
    },
    {
        q: 'How much will it cost me?',
        a: 'Absolutely nothing! We just want you to show up and have fun.',
    },
    {
        q: 'Will there be travel reimbursements?',
        a: 'Unfortunately, we will not be offering travel reimbursements',
    },
    {
        q: 'Who can attend?',
        a: 'Any currently enrolled high school student is welcome to attend.',
    },
    {
        q: 'What should I bring?',
        a: 'You should bring your laptop, phone, charger, and a student ID.',
    },
    {
        q: 'Do I need an idea or a team?',
        a:
            'No! We will be running a team building event and there will be time for you to brainstorm an idea.',
    },
    {
        q: 'How do I apply?',
        a:
            'Fill out the form linked above and describe any projects that you’ve done before and what you hope to get out of hths.hacks(). HTHS students will be given priority.',
    },
    {
        q: 'Will food be provided?',
        a:
            'Yes, we’ll be serving lunch and dinner. Snacks and drinks will also be available throughout the day.',
    },
    {
        q: 'Who runs hths.hacks()?',
        a:
            'hths.hacks() is entirely run by HTHS students. All of the funding comes from sponsors.',
    },
    { q: 'Any other questions?', a: 'Email us at contact@hthshacks.com' },
].chunk_inefficient(2);
