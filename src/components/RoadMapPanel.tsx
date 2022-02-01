import React from "react";
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';

import './RoadMapPanel.scss';

// https://cryptologos.cc/algorand
import logo_btc from '../assets/bitcoin-btc-logo.svg';
import logo_btc_qr from '../assets/bitcoin-btc-qr-code.svg';
import logo_algo from '../assets/algorand-algo-logo.svg';
import logo_algo_qr from '../assets/algorand-algo-qr-code.svg';
import logo_hnt from '../assets/helium-hnt-logo.svg';
import logo_hnt_qr from '../assets/helium-hnt-qr-code.svg';

function RoadMapPanel(props: {
    children?: React.ReactNode;
}) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="jumbotron-sub jumbotron-fluid">
                            <div className="container">
                                <h2 className="display-6">Roadmap</h2>
                                <p className="lead">2022-02-01: Create a functional Algorand explorer that searches the users unique account id for PLANETS transactions which include stream data and payouts.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-sub jumbotron-fluid">
                            <div className="container">
                                <h2 className="display-6">Feature Ideas</h2>
                                <ul>
                                    <li>Add ability to store Algo account id for repeat lookups.</li>
                                    <li>Split PLANETS transactions into to groups using device id.</li>
                                    <li>Add graphs to display results by device, month, year etc.</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="display-6">Donations</h2>
                        <p>
                            Find this tool useful? Why not make a small donation help fund this project development and hosting.
                        </p>
                        <CardGroup className="mb-3 donations">
                            <Card className="donation-qr">
                                <Card.Img variant="top" src={logo_btc_qr} />
                                <Card.Body>
                                    <Card.Title><img src={logo_btc} alt="" />BTC Donation</Card.Title>
                                    <Card.Text>
                                        3LQmgpjgN3bFtxeiQmcrgtQ69PaDbrk8x1
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="donation-qr">
                                <Card.Img variant="top" src={logo_algo_qr} />
                                <Card.Body>
                                    <Card.Title><img src={logo_algo} alt="" /> ALGO Donation</Card.Title>
                                    <Card.Text>
                                        L3WJFR4YDCTIUUFXYM5GOCMXIHI764WDKH27KWPDXPUS3TNOMNO4DUJU5Q
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="donation-qr">
                                <Card.Img variant="top" src={logo_hnt_qr} />
                                <Card.Body>
                                    <Card.Title><img src={logo_hnt} alt="" />HNT Donation</Card.Title>
                                    <Card.Text>
                                        147XDcnS9UrwCqMHsf8fezkXiA8KFcnh7dmwS1PzpmrN1tJjziV
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RoadMapPanel;
