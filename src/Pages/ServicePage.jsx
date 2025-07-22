import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function ServicePage() {
  return (
    <div className="services-page py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="home-page-card text-center shadow-sm p-4">
              <Card.Body>
                <h2 className="mb-4 fw-bold">Services We Offer</h2>
                <ul className="list-unstyled fs-5 text-muted">
                  <li>
                    <strong>Lawn Mowing</strong> – includes weeding, trimming, and leaf removal
                  </li>
                  <li className="mt-3">
                    <strong>Snow Shoveling</strong> – driveway and walkway clearing after snowfall
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicePage;

