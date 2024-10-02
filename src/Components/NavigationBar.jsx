import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap"

function NavigationBar() {
    return (
        <Navbar>
            <Container>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default NavigationBar; 