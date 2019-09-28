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
    { q: 'This is a question?', a: 'This is the answer' },
    { q: 'This is a question?', a: 'This is the answer' },
    { q: 'This is a question?', a: 'This is the answer' },
    { q: 'This is a question?', a: 'This is the answer' },
].chunk_inefficient(2);
