import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RequestForm from "../Components/RequestForm";
import MessageCard from "../Components/MessageCard";
import ServicePage from "./ServicePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./AboutPage";
import MarketingSection from "../Components/MarketingSection";

function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <div className="home-header text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">
            Your Lawn & Driveway, Handled by Pros
          </h1>
          <p className="lead text-muted mt-3">
            Reliable, affordable, and fast services to keep your outdoor space
            pristine — all year round.
          </p>
        </Container>
      </div>

      <Container className="mb-5 mt-4">
        <Row className="g-4">
          <Col md={6} className="d-flex">
            <MessageCard
              title={"Lawn Mowing Services"}
              subject={
                "Keep your lawn looking fresh and clean without lifting a finger."
              }
              service={"Lawn Mowing"}
              onSelectService={handleServiceSelection}
            />
          </Col>
          <Col md={6} className="d-flex">
            <MessageCard
              title={"Snow Shoveling Services"}
              subject={
                "Clear your driveway and walkways quickly and safely after any storm."
              }
              service={"Snow Shoveling"}
              onSelectService={handleServiceSelection}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

