import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const AddUserForm = () => {
    const [usernameText, setUsernameText] = useState("");
    // when submit, does get request to find user and pass that info back up to app.js to set user



    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Enter New Username</Form.Label>
                    <Form.Control type="text" value={usernameText} onChange={e => setUsernameText(e.target.value)} />
                </Form.Group>
                <Button type="submit">Search</Button>
            </Form>
        </Container>
    )
}

export default AddUserForm;