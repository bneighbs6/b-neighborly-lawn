import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RequestForm from "../Components/RequestForm";
import MessageCard from "../Components/MessageCard";
import ServicePage from "./ServicePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./AboutPage";
// import ContactPage from "./ContactPage";
import MarketingSection from "../Components/MarketingSection";

function HomePage() {

  return (
    <>
      <div className="home-header">
        <h1>Ready to hire a professional to handle your lawn?</h1>
      </div>

      <Container className="mb-5" id="home">
        <Row>
          <Col className="message-cards-col">
            <MessageCard
              title={"'I don't want to shovel my driveway'"}
              subject={"Let us do it for you."}
              service={"snow shoveling"}
            />
            <br></br>
            <MessageCard
              title={"'I don't want to mow my lawn'"}
              subject={"Let us do it for you."}
              service={"lawn mowing"}
            />
          </Col>
        </Row>
      </Container>
<br></br>
      <Container id="request-form">
        <Col className="mb-5">
          <div>
            <RequestForm />
          </div>
        </Col>
      </Container>
<br></br>
      <Container>
        <Row>
          <Col sm={12} md={6} id="services">
            <ServicePage />
          </Col>
          <Col sm={12} md={6} id="about">
            <AboutPage />
          </Col>
          {/* <Col sm={12} md={4} id="contact">
            <ContactPage />
          </Col> */}
        </Row>
      </Container>

      {/* <Container>
        <MarketingSection />
      </Container> */}
    </>
  );
}

export default HomePage;
