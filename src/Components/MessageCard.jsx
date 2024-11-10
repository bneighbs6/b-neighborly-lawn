import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function MessageCard({ title, subject, service, onSelectService }) {
    // Modify handleClick to scroll to the request form
    function handleClick() {
        console.log("Click Here clicked. Should take user to request form on the web page.")
        const requestFormSection = document.getElementById("request-form");
        if (requestFormSection) {
            requestFormSection.scrollIntoView({ behavior: "smooth" });
        }
        onSelectService(service);
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