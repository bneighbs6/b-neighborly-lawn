import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RequestForm from "../Components/RequestForm";
import MessageCard from "../Components/MessageCard";
import ServicePage from "./ServicePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

function HomePage() {

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

      <Container>
        <Row>
          <Col sm={12} md={4} id="services">
            <ServicePage />
          </Col>
          <Col sm={12} md={4} id="about">
            <AboutPage />
          </Col>
          <Col sm={12} md={4} id="contact">
            <ContactPage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
