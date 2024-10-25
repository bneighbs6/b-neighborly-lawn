import React from "react";
import { Form } from "react-bootstrap";

function RequestForm() {
    return (
        <Form>
            <Form.Group classname='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tell us what you are looking for from us</Form.Label>
                <Form.Control as="textarea" rows={4}></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default RequestForm; 