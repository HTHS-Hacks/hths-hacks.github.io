import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Add the following two lines
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './nav.css';
import './hamburgers.css';
import $ from 'jquery';
import Home from './home';
import About from './about';
import FAQ from './faq';
import Schedule from './schedule';
import Sponsors from './sponsors';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faQuestion,
    faClock,
    faGift,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
        };
    }
    componentDidMount() {
        $(document).ready(() => {
            var active1 = false;
            var active2 = false;
            var active3 = false;
            var active4 = false;

            $('.nav-parent').on('mousedown', () => {
                if (!active1)
                    $('.nav-parent')
                        .find('.nav-item1')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(0px,125px)',
                        });
                else
                    $('.nav-parent')
                        .find('.nav-item1')
                        .css({
                            'background-color': 'dimGray',
                            transform: 'none',
                        });
                if (!active2)
                    $('.nav-parent')
                        .find('.nav-item2')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(60px,105px)',
                        });
                else
                    $('.nav-parent')
                        .find('.nav-item2')
                        .css({
                            'background-color': 'darkGray',
                            transform: 'none',
                        });
                if (!active3)
                    $('.nav-parent')
                        .find('.nav-item3')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(105px,60px)',
                        });
                else
                    $('.nav-parent')
                        .find('.nav-item3')
                        .css({
                            'background-color': 'silver',
                            transform: 'none',
                        });
                if (!active4)
                    $('.nav-parent')
                        .find('.nav-item4')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(125px,0px)',
                        });
                else
                    $('.nav-parent')
                        .find('.nav-item4')
                        .css({
                            'background-color': 'silver',
                            transform: 'none',
                        });
                active1 = !active1;
                active2 = !active2;
                active3 = !active3;
                active4 = !active4;
                this.setState({ active: active1 });
            });
        });
    }
    render() {
        return (
            <div>
                <div className="nav-parent">
                    <a href="#about">
                        <div className="nav-item1">
                            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        </div>
                    </a>
                    <a href="#faq">
                        <div className="nav-item2">
                            <FontAwesomeIcon icon={faQuestion} size="2x" />
                        </div>
                    </a>
                    <a href="#schedule">
                        <div className="nav-item3">
                            <FontAwesomeIcon icon={faClock} size="2x" />
                        </div>
                    </a>
                    <a href="#sponsors">
                        <div className="nav-item4">
                            <FontAwesomeIcon icon={faGift} size="2x" />
                        </div>
                    </a>
                    <div className="nav-main-item">
                        <div
                            className={`hamburger hamburger--elastic ${
                                this.state.active ? 'is-active' : ''
                            }`}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <Home />
                <About />
                <FAQ />
                <Schedule />
                <Sponsors />
                <Footer />
            </div>
        );
    }
}

const styles = {
    navbarWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '33.33%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '960px',
    },
};

const mountApp = document.getElementById('app');
ReactDOM.render(<App />, mountApp);
