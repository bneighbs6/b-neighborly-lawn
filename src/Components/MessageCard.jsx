import React from "react";
import { Button, Card, Container, Row, Col, Nav } from "react-bootstrap";

function MessageCard({ title, subject, service, onSelectService }) {

    return (
      <Container>
        <Row>
          <Col>
            <Card className="home-page-card">
              <Card.Body>
                <h2>{title}</h2>
                <h4>{subject}</h4>
                <p>
                  <Nav.Link href="/request-form">
                    <Button
                      variant="primary"
                      style={{ backgroundColor: "#003f85", border: "none" }}
                    >
                      Click Here
                    </Button>
                  </Nav.Link>
                  to receive a quote for professional {service}.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default MessageCard;