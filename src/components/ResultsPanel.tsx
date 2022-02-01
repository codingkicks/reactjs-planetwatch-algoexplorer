import { Container, Row, Col } from 'react-bootstrap';

import './ResultsPanel.scss';

import { Transactions } from '../interfaces/Transactions';

function ResultsPanel(props: {
    results: Transactions[] | undefined;
}) {

    const ResultsList = (props: {
        transactionData: Transactions[] | undefined
    }) => {
        const results = props.transactionData;

        if (!results) { return (<div className="Result" />); }

        const transactionList = results.map((transaction: Transactions) =>
            <div className="ResultItem" key={transaction.id}>
                <div>{transaction.tDate}</div>
                <div>{transaction.device}</div>
                <div>{transaction.streams}</div>
                <div>{(transaction.amount / 1000000).toFixed(2)}</div>
                <div>{(transaction.planets_per_stream / 1000000).toFixed(2)}</div>
            </div>
        );

        const transactionHeader = <div className="ResultHeader">
            <div>Date:</div>
            <div>Device:</div>
            <div>Streams:</div>
            <div>Planets:</div>
            <div>Planets/Stream:</div>
        </div>;

        return (
            <div className="Result">
                {transactionHeader}
                {transactionList}
            </div>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <ResultsList transactionData={props.results} />
                </Col>
            </Row>
        </Container>
    );
}

export default ResultsPanel;
