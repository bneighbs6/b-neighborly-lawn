import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, Card, Container, Row, Col } from "react-bootstrap";

function RequestForm({ selectedService }) {
  const initialFormState = {
    full_name: "",
    email: "",
    street_address: "",
    zip_code: "",
    choose_service: "",
    salt_application: "",
    request: "",
  };

  const [form, setForm] = useState({ ...initialFormState });
  const [serviceChoice, setServiceChoice] = useState("");
  const [saltAppChoice, setSaltAppChoice] = useState("");

  useEffect(() => {
    if (selectedService) {
      setServiceChoice(selectedService);
      setForm((prevForm) => ({ ...prevForm, choose_service: selectedService }));
    }
  }, [selectedService]);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mqakqbqb", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Your form has been submitted. You will receive an email within 24 hours.");
      setForm({ ...initialFormState });
      setServiceChoice("");
    } else {
      alert("There was a problem with your submission. Please try again.");
    }
  }

  return (
    <div className="request-form-page bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="home-page-card p-4 shadow-sm">
              <Card.Body>
                <h2 className="text-center mb-4 fw-bold">Request a Quote</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="full_name"
                      required
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="street_address"
                      required
                      value={form.street_address}
                      onChange={(e) => setForm({ ...form, street_address: e.target.value })}
                      placeholder="Enter your street address"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zip_code"
                      required
                      value={form.zip_code}
                      onChange={(e) => setForm({ ...form, zip_code: e.target.value })}
                      placeholder="Enter your zip code"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Choose a Service</Form.Label>
                    <Dropdown onSelect={(key) => {
                      setServiceChoice(key);
                      setForm({ ...form, choose_service: key });
                    }}>
                      <Dropdown.Toggle
                        variant="primary"
                        style={{ backgroundColor: "#003f85", border: "none" }}
                      >
                        {serviceChoice || "* Choose a Service"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item disabled>* Choose a Service</Dropdown.Item>
                        <Dropdown.Item eventKey="Lawn Mowing">Lawn Mowing</Dropdown.Item>
                        <Dropdown.Item eventKey="Snow Shoveling">Snow Shoveling</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>

                  {serviceChoice === "Snow Shoveling" && (
                    <Form.Group className="mb-3">
                      <Form.Label>Salt Application</Form.Label>
                      <Dropdown onSelect={(key) => {
                        setSaltAppChoice(key);
                        setForm({ ...form, salt_application: key });
                      }}>
                        <Dropdown.Toggle variant="secondary">
                          {saltAppChoice || "Select Salt Application"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item disabled>Select Salt Application</Dropdown.Item>
                          <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                          <Dropdown.Item eventKey="No">No</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Form.Group>
                  )}

                  <Form.Group className="mb-4">
                    <Form.Label>Tell us what you're looking for</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      name="request"
                      value={form.request}
                      onChange={(e) => setForm({ ...form, request: e.target.value })}
                      placeholder="e.g. 'Please mow my lawn twice a month May–October.'"
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ backgroundColor: "#003f85", border: "none" }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RequestForm;
