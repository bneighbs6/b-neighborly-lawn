import React from "react";
import { Button, Card, Nav } from "react-bootstrap";

function MessageCard({ title, subject, service, onSelectService, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      onSelectService(service);
    }
  };

  return (
    <Card className="home-page-card h-100 shadow-sm text-center">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <h2 className="fs-4 fw-bold">{title}</h2>
          <p className="text-muted">{subject}</p>
        </div>

        <p className="mt-4">
          {disabled ? (
            <Button variant="secondary" disabled>
              Coming Soon
            </Button>
          ) : (
            <Nav.Link href="/request-form" className="d-inline p-0" onClick={handleClick}>
              <Button
                variant="primary"
                style={{ backgroundColor: "#003f85", border: "none" }}
              >
                Click Here
              </Button>
            </Nav.Link>
          )}
          {!disabled && <> to receive a quote for professional {service}.</>}
        </p>
      </Card.Body>
    </Card>
  );
}

export default MessageCard;
