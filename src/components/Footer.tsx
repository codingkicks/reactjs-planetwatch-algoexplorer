import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.scss';

function Footer(props: {
    children?: React.ReactNode;
}) {
    return (
        <footer className="">
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <a href="https://www.planetwatch.io/" target="_blank" rel="noreferrer">Planetwatch Website</a>
                            </li>
                            <li>
                                <a href="https://explorer.planetwatch.io/#/" target="_blank" rel="noreferrer">Planetwatch Explorer</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h3>Trading / Staking</h3>
                        <ul>
                            <li>
                                <a href="https://tinyman.org/" target="_blank" rel="noreferrer">Tinyman</a>
                            </li>
                            <li>
                                <a href="https://app.yieldly.finance/" target="_blank" rel="noreferrer">Yieldly Finance</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6}>
                        <h3>About</h3>
                        <p>&copy; Coding Kicks 2022</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;
