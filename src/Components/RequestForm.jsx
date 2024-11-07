import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

function RequestForm() {
  const initialFormState = {
    full_name: "",
    email: "",
    street_address: "",
    zip_code: "",
    choose_service: "",
    request: "",
  };

  const [form, setForm] = useState({ ...initialFormState });
  const [serviceChoice, setServiceChoice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    console.log("Submit clicked.")

    // Send form data to Formspree
    const response = await fetch("https://formspree.io/f/mqakqbqb", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert(
        "Your form has been submitted. You will receive an email responding to your request within 24 hours."
      );
      setForm({ ...initialFormState }); // Reset the form
      setServiceChoice(""); // Reset the service choice
    } else {
      alert("There was a problem with your submission. Please try again.");
    }
  }

  function handleNameChange(e) {
    setForm({ ...form, full_name: e.target.value });
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
    <>
      <h1>Request A Quote</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="full_name" // Changed to match the state key
            type="text"
            required
            value={form.full_name}
            onChange={handleNameChange}
            placeholder="Enter your name"
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
              <Dropdown.Toggle
                variant="primary"
                style={{ backgroundColor: "#003f85", border: "none" }}
              >
                {serviceChoice || "* Choose an Option"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey={"Lawn Mowing"}>
                  Lawn Mowing
                </Dropdown.Item>
                <Dropdown.Item eventKey={"Snow Shoveling"}>
                  Snow Shoveling
                </Dropdown.Item>
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
          <Button
            variant="primary"
            style={{ backgroundColor: "#003f85", border: "none" }}
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default RequestForm;
