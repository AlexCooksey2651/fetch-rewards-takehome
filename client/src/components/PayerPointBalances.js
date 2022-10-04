import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const PayerPointBalances = () => {
    const [showBalances, setShowBalances] = useState(false)

    function toggleShowBalances() {
        setShowBalances(!showBalances)
    }

    return (
    <Container>
        <Button onClick={() => toggleShowBalances()}>{showBalances ? "Hide Balances" : "Show Payer Point Balances"}</Button>
    </Container>
  )
}

export default PayerPointBalances;