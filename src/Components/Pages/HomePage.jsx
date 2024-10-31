import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RequestForm from "../RequestForm";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const navigate= useNavigate(); 

  function handleClick() {
    alert("This will take you to our request form. Click OK to continue.")
    navigate("/request-form");
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
                <h2>Winter Is Coming</h2>
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
            <Card className="home-page-card">
              <Card.Body>
                <h2>We want to mow your lawn</h2>
                <h4>Tired of mowing your lawn?</h4>
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
          <Col>
          <div>
            <RequestForm />
          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
