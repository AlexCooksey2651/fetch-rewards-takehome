import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const PayerPointBalances = ({ user }) => {
    const [showBalances, setShowBalances] = useState(false)

    function toggleShowBalances() {
        setShowBalances(!showBalances)
    }

    const payerBalances = () => {
        let balancesObj = {};
        let balancesArray = []
        let transactions = user.transactions
        for (let transaction of transactions) {
            if (balancesObj[transaction.payer]) {
                balancesObj[transaction.payer] = balancesObj[transaction.payer] + transaction.remaining
            } else {
                balancesObj[transaction.payer] = transaction.remaining;
            }
        }
        for (let key in balancesObj) {
            balancesArray.push({ payer: key, points: balancesObj[key] })
        }
        return balancesArray;
    }

    const balanceList = payerBalances().map(item => {
        return <li>Payer: {item.payer}, Points: {item.points}</li>
    })

    return (
        <Container>
            <Button onClick={() => toggleShowBalances()}>{showBalances ? "Hide Balances" : "Show Payer Point Balances"}</Button>
            {showBalances ?
                <ul>
                    {balanceList}
                </ul>
                :
                ""
            }
        </Container>
    )
}

export default PayerPointBalances;