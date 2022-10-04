import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NewTransactionForm = () => {
    const [payerName, setPayerName] = useState("");
    const [pointAmount, setPointAmount] = useState(0);
    const [timeStamp, setTimeStamp] = useState("");

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Payer Name</Form.Label>
                    <Form.Control type="text" value={payerName} onChange={e => setPayerName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Enter Point Amount</Form.Label>
                    <Form.Control type="number" min="0" value={pointAmount} onChange={e => setPointAmount(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Enter Transaction Date</Form.Label>
                    <Form.Control type="date" value={pointAmount} onChange={e => setPointAmount(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type="submit">Submit New Transaction</Button>
            </Form>
        </Container>
    )
}

export default NewTransactionForm