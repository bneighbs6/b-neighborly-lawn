import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RequestForm from "../Components/RequestForm";
import MessageCard from "../Components/MessageCard";
import ServicePage from "./ServicePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./AboutPage";
// import ContactPage from "./ContactPage";
import MarketingSection from "../Components/MarketingSection";

function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  }

  return (
    <>
      <div className="home-header">
        <h1>Ready to hire a professional to handle your lawn?</h1>
      </div>

      <Container className="mb-5" id="home">
        <Row>
          <Col className="message-cards-col">
            <MessageCard
              title={"'I need help mowing my lawn.'"}
              subject={"Let us do it for you."}
              service={"Lawn Mowing"}
              onSelectService={handleServiceSelection}
            />
            <br></br>
            <MessageCard
              title={"'I need help shoveling my driveway.'"}
              subject={"Let us do it for you."}
              service={"Snow Shoveling"}
              onSelectService={handleServiceSelection}
            />
          </Col>
        </Row>
      </Container>
      <br></br>
      {/* <Container id="request-form">
        <Col className="mb-5">
          <div>
            <RequestForm selectedService={selectedService} />
          </div>
        </Col>
      </Container> */}
      <br></br>
      <Container>
        <Row>
          {/* <Col sm={12} md={6} id="services">
            <ServicePage />
          </Col> */}
          {/* <Col sm={12} md={6} id="about">
            <AboutPage />
          </Col> */}
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
