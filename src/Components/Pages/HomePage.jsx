import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  // TODO: Have handleClick take user to a form to fill out request
  function handleClick() {
    console.log("button clicked");
  }
  
  return (
    <>
      <div className="home-header">
        <h1>Ready to hire a professional to handle your lawn?</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <Card className="home-page-card">
              <Card.Body>
                <Card.Title>Winter Is Coming</Card.Title>
                <h4>Don't feel like shoveling snow all winter?</h4>
                <p>
                  <Button
                    style={{ backgroundColor: "#003f85" }}
                    onClick={handleClick}
                  >
                    Click Here
                  </Button>
                  to receive a quote for simple snow shoveling done
                  professionally.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="home-page-card">
              <Card.Body>
                <Card.Title>We want to mow your lawn</Card.Title>
                <p>
                  <Button
                    style={{ backgroundColor: "#003f85" }}
                    onClick={handleClick}
                  >
                    Click Here
                  </Button>
                  to receive a quote for lawn mowing done professionally.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage; 