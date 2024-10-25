import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  // TODO: 10/25/24 Make handleClick function take you to a form to fill out a request
  function handleClick() {
    console.log("button clicked");
  }

  // Create a home page that explains our services offered.
  return (
    <>
      <div className="home-header">
        <h1>Ready to hire a professional to handle your lawn?</h1>
      </div>
      <Container>
        <div className="home-page-card">
          <Card style={{ width: "33%" } }>
            <Card.Title style={{textAlign: 'center'}}>Winter Is Coming</Card.Title>
            <h4 style={{textAlign: 'center'}}>Don't feel like shoveling snow all winter?</h4>
            <p>
              <Button
                style={{ backgroundColor: "#003f85" }}
                onClick={handleClick}
              >
                Click Here
              </Button>
              to receive a quote for simple snow shoveling done professionally.
            </p>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default HomePage; 