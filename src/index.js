import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Add the following two lines
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './nav.css';
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
    componentDidMount() {
        $(document).ready(function() {
            var active1 = false;
            var active2 = false;
            var active3 = false;
            var active4 = false;

            $('.nav-parent').on('mousedown touchstart', function() {
                if (!active1)
                    $(this)
                        .find('.nav-item1')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(0px,125px)',
                        });
                else
                    $(this)
                        .find('.nav-item1')
                        .css({
                            'background-color': 'dimGray',
                            transform: 'none',
                        });
                if (!active2)
                    $(this)
                        .find('.nav-item2')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(60px,105px)',
                        });
                else
                    $(this)
                        .find('.nav-item2')
                        .css({
                            'background-color': 'darkGray',
                            transform: 'none',
                        });
                if (!active3)
                    $(this)
                        .find('.nav-item3')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(105px,60px)',
                        });
                else
                    $(this)
                        .find('.nav-item3')
                        .css({
                            'background-color': 'silver',
                            transform: 'none',
                        });
                if (!active4)
                    $(this)
                        .find('.nav-item4')
                        .css({
                            'background-color': 'gray',
                            transform: 'translate(125px,0px)',
                        });
                else
                    $(this)
                        .find('.nav-item4')
                        .css({
                            'background-color': 'silver',
                            transform: 'none',
                        });
                active1 = !active1;
                active2 = !active2;
                active3 = !active3;
                active4 = !active4;
            });
        });
    }
    render() {
        return (
            <div>
                <div class="nav-parent">
                    <a href="#about">
                        <div class="nav-item1">
                            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
                        </div>
                    </a>
                    <a href="#faq">
                        <div class="nav-item2">
                            <FontAwesomeIcon icon={faQuestion} size="2x" />
                        </div>
                    </a>
                    <a href="#schedule">
                        <div class="nav-item3">
                            <FontAwesomeIcon icon={faClock} size="2x" />
                        </div>
                    </a>
                    <a href="#sponsors">
                        <div class="nav-item4">
                            <FontAwesomeIcon icon={faGift} size="2x" />
                        </div>
                    </a>
                    <div class="nav-main-item">
                        <FontAwesomeIcon icon={faBars} size="3x" />
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
