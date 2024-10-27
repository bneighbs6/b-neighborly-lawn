import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function RequestForm() {
  const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    request: "",
  };

  const [form, setForm] = useState({ ...initialFormState });

  function handleSubmit(e) {
    e.preventDefault();
    const abortController = new AbortController();

    alert("Form submitted. Press OK to continue.");
    setForm({ ...initialFormState });
    return () => abortController.abort;
  }

  function handleFirstNameChange(e) {
    setForm({ ...form, first_name: e.target.value });
  }

  function handleLastNameChange(e) {
    setForm({ ...form, last_name: e.target.value });
  }

  function handleEmailChange(e) {
    setForm({ ...form, email: e.target.value });
  }

  function handleRequestChange(e) {
    setForm({ ...form, request: e.target.value });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group classname="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          required
          value={form.first_name}
          onChange={handleFirstNameChange}
          placeholder="Enter your first name"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          required
          placeholder="Enter your last name"
          value={form.last_name}
          onChange={handleLastNameChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="Enter your email"
          value={form.email}
          onChange={handleEmailChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tell us what you are looking for from us</Form.Label>
        <Form.Control
          as="textarea"
          required
          rows={4}
          value={form.request}
          onChange={handleRequestChange}
          placeholder="e.g. 'I am looking for someone to mow my lawn twice a month from May-October'"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Button type="submit" style={{ backgroundColor: "#003f85" }}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default RequestForm;
