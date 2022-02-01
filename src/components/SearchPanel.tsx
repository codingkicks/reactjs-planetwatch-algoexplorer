import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button, Alert, ProgressBar } from 'react-bootstrap';

import './SearchPanel.scss';

let peachTimer: any = null;

function SearchPanel(props: {
    children?: React.ReactNode;
    handleResults: Function;
    handleError?: Function;
}) {
    const [accountId, setAccountId] = useState<string>("");
    const [isLoading, setLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [show, setShow] = useState(false);
    const [showError, toggleErrorAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchAccountTransactions = (accountId: string) => {
        if (accountId === '') {
            return new Promise((resolve, reject) => {
                reject("");
            });
        }

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        setLoadingProgress(0);
        setLoading(true);

        peachTimer = setInterval(() => {
            if (loadingProgress >= 100) {
                clearInterval(peachTimer);
                setTimeout(() => {
                    setLoading(true);
                }, 1000);
            }
            setLoadingProgress(loadingProgress + 1);
        }, 1000 / 60);

        return new Promise((resolve, reject) => {
            fetch(`https://algoindexer.algoexplorerapi.io/v2/transactions?limit=100&address=${encodeURIComponent(accountId)}&currency-greater-than=1000&asset-id=27165954`, requestOptions)
                .then(parseJSON)
                .then((response: any) => {
                    setLoading(false);
                    if (response.ok) {
                        return resolve(response.json);
                    }
                    return reject(response.json);
                })
                .catch((error) => {
                    setLoading(false);
                    return reject({ networkError: error.message });
                });
        });
    };

    const parseJSON = (response: any) => {
        return new Promise((resolve) => response.json()
            .then((json: any) => resolve({
                status: response.status,
                ok: response.ok,
                json,
            })));
    }

    const handleChange = (event: any) => {
        setAccountId(event.target.value);
    }

    const handleSearch = () => {
        if (!accountId) { return; }

        toggleErrorAlert(false);

        fetchAccountTransactions(accountId)
            .then(results => {
                props.handleResults(accountId, results);
            })
            .catch(error => {
                props.handleResults(accountId, []);
                setErrorMessage(error.message);
                toggleErrorAlert(true);
            });
    }

    return (
        <>
            {isLoading === true ? <Container>
                <Row>
                    <Col>
                        <ProgressBar animated now={loadingProgress} />
                    </Col>
                </Row>
            </Container> : null}
            <Container>
                <Row>
                    <Col>
                        {show === true ?
                            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                Check back for updates!
                            </Alert> : null}
                        {showError === true ?
                            <Alert variant="danger" onClose={() => toggleErrorAlert(false)} dismissible>
                                {errorMessage}
                            </Alert> : null}
                        <p>
                            Enter your Algo account id to search for your records.
                        </p>
                        <InputGroup className="mb-3 SearchPanel">
                            <Form.Control
                                type="text"
                                placeholder="Enter your Algo Account ID"
                                aria-label="Enter your Algo Account ID"
                                aria-describedby="button--search-algo"
                                onChange={handleChange}
                            />
                            <Button variant="primary" id="button--search-algo" disabled={accountId === ''} onClick={handleSearch}>
                                Search
                            </Button>
                            <Button variant="secondary" id="button--search-algo" disabled={true}>
                                Report
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SearchPanel;
