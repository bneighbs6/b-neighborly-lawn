import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function AboutPage() {
  return (
    <div className="about-page bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="home-page-card p-4 shadow-sm text-center">
              <Card.Body>
                <h2 className="fw-bold mb-4">About Us</h2>
                <p className="fs-5 text-muted">
  <strong>B. Neighborly Lawn Services</strong> was founded by Brett Neighbors with one goal in mind: to deliver the highest standard of lawn care and snow removal services across the Flathead Valley. 

  <br /><br />

  With a strong commitment to professionalism, reliability, and year-round service, B. Neighborly ensures that every property we care for is maintained with precision and pride. Whether it's mowing in the summer or snow shoveling in the winter, we're here to keep your outdoor space looking its best — season after season.
</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;

