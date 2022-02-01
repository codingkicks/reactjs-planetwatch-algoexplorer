import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import './WelcomePanel.scss';

function WelcomePanel(props: {
    children?: React.ReactNode;
}) {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Planetwatch Streams/Reward Tracker</h1>
                            <p className="lead">View your device(s) most recent data streams and PLANETS earned.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default WelcomePanel;
