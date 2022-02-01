import React, { useState } from "react";
import { decode as base64_decode } from "base-64";
import './Main.scss';

import { Transactions, TransactionSearchResults } from '../interfaces/Transactions';

import WelcomePanel from "./WelcomePanel";
import SearchPanel from "./SearchPanel";
import ResultsPanel from "./ResultsPanel";

function Main() {
    const [transactionResults, setTransactionResults] = useState<Transactions[]>();

    const compileTransactions = (accountId: string, transactionData: TransactionSearchResults) => {
        let transactions: Transactions[] = [];

        if (transactionData && transactionData.transactions) {
            for (let index = 0; index < transactionData.transactions.length; index++) {
                const transaction = transactionData.transactions[index];

                if (transaction && 'note' in transaction && transaction['asset-transfer-transaction']['receiver'] === accountId) {
                    const transactionDataNote = base64_decode(transaction.note);
                    const transactionDataParsed = JSON.parse(transactionDataNote);
                    let transactionBlock = {
                        assetId: transaction['asset-transfer-transaction']['asset-id'],
                        amount: transaction['asset-transfer-transaction'].amount,
                        note: '',
                        id: transaction.id,
                        streams: transactionDataParsed.streams,
                        planets_per_stream: 0,
                        deviceType: transactionDataParsed.type,
                        device: transactionDataParsed.deviceId,
                        tDate: transactionDataParsed.date
                    }
                    transactionBlock.planets_per_stream = transactionBlock.amount / transactionBlock.streams;
                    transactions.push(transactionBlock);
                }
            }
        }

        return transactions;
    };

    const displayResults = (accountId: string, results: TransactionSearchResults) => {
        const filtered = compileTransactions(accountId, results);
        setTransactionResults(filtered);
    };

    // const displayErrorResult = (results: any) => {
    //     console.log(results);
    // };

    return (
        <main>
            <WelcomePanel />
            <SearchPanel handleResults={displayResults} />
            <ResultsPanel results={transactionResults} />
        </main>
    );
}

export default Main;
