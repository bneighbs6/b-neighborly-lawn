import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RequestForm from "../Components/RequestForm";
import MessageCard from "../Components/MessageCard";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const navigate = useNavigate(); 

  return (
    <>
      <div className="home-header">
        <h1>Ready to hire a professional to handle your lawn?</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <MessageCard
              title={"'I don't want to shovel my driveway'"}
              subject={"Let us do it for you."}
              service={"snow shoveling"}
            />
            <MessageCard
              title={"'I don't want to mow my lawn'"}
              subject={"Let us do it for you."}
              service={"lawn mowing"}
            />
          </Col>
        </Row>
      </Container>

      <Container id="request-form">
        <Col>
          <div>
            <RequestForm />
          </div>
        </Col>
      </Container>

      <Container id="services">
        <Row>
          <Col>
            <h1>Services Area</h1>
          </Col>
        </Row>
      </Container>

      <Container id="about">
        <Row>
          <Col>
            <h1>About Area</h1>
          </Col>
        </Row>
      </Container>

      <Container id="contact">
        <Row>
          <Col>
            <h1>Contact Area</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
