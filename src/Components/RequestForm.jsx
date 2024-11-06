import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { useForm } from "@formspree/react"

function RequestForm() {
  const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    street_address: "",
    zip_code: "",
    choose_service: "",
    request: "",
  };
  
  const [form, setForm] = useState({ ...initialFormState });
  const [serviceChoice, setServiceChoice] = useState("");


  function handleFirstNameChange(e) {
    setForm({ ...form, first_name: e.target.value });
  }

  function handleLastNameChange(e) {
    setForm({ ...form, last_name: e.target.value });
  }

  function handleEmailChange(e) {
    setForm({ ...form, email: e.target.value });
  }

  function handleStreetAddressChange(e) {
    setForm({ ...form, street_address: e.target.value });
  }

  function handleZipCodeChange(e) {
    setForm({ ...form, zip_code: e.target.value });
  }

  function handleChooseServiceChange(eventKey) {
    setServiceChoice(eventKey);
    setForm({ ...form, choose_service: eventKey });
  }

  function handleRequestChange(e) {
    setForm({ ...form, request: e.target.value });
  }

  return (
    <Form action="https://formspree.io/f/mqakqbqb" method="POST">
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="first_name" // Changed to match the state key
          type="text"
          required
          value={form.first_name}
          onChange={handleFirstNameChange}
          placeholder="Enter your first name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="last_name" // Changed to match the state key
          type="text"
          required
          value={form.last_name}
          onChange={handleLastNameChange}
          placeholder="Enter your last name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name="email" // Changed to match the state key
          type="email"
          required
          value={form.email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Street Address</Form.Label>
        <Form.Control
          name="street_address" // Changed to match the state key
          type="text"
          required
          value={form.street_address}
          onChange={handleStreetAddressChange}
          placeholder="Enter your street address"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          name="zip_code" // Changed to match the state key
          type="text"
          required
          value={form.zip_code}
          onChange={handleZipCodeChange}
          placeholder="Enter your zip code"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <div id="dropdown-menu">
          <Dropdown onSelect={handleChooseServiceChange}>
            <Dropdown.Toggle style={{ backgroundColor: "#003f85" }}>
              {serviceChoice || "* Choose an Option"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey={"Lawn Mowing"}>Lawn Mowing</Dropdown.Item>
              <Dropdown.Item eventKey={"Snow Shoveling"}>Snow Shoveling</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tell us what you are looking for from us</Form.Label>
        <Form.Control
          name="message"
          as="textarea"
          required
          rows={2}
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
