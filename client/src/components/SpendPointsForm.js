import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const SpendPointsForm = () => {
    const [pointsSpent, setPointsSpent] = useState(0);
    // when submit, does get request to find user and pass that info back up to app.js to set user



    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Points Spent</Form.Label>
                    <Form.Control type="number" min="0" step="1" value={pointsSpent} onChange={e => setPointsSpent(e.target.value)} />
                </Form.Group>
                <Button type="submit">Submit Points Spent</Button>
            </Form>
        </Container>
    )
}

export default SpendPointsForm;