import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function MessageCard({ title, subject, service }) {
    // Modify handleClick to scroll to the request form
    function handleClick() {
        alert("This will take you to our request form. Click OK to continue.");
        const requestFormSection = document.getElementById("request-form");
        if (requestFormSection) {
            requestFormSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card className="home-page-card">
                        <Card.Body>
                            <h2>{title}</h2>
                            <h4>{subject}</h4>
                            <p>
                                <Button
                                    variant="primary"
                                    style={{ backgroundColor: "#003f85", border: "none" }}
                                    onClick={handleClick}
                                >
                                    Click Here
                                </Button>
                                to receive a quote for professional {service}.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MessageCard;