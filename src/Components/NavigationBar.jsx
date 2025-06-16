import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant="light">
    <Container>
      <Nav className="mx-auto">
        <Nav.Link href="/">
          <button className="uniform-btn-nav">Home</button>
        </Nav.Link>
        <Nav.Link href="/services">
          <button className="uniform-btn-nav">Services</button>
        </Nav.Link>
        <Nav.Link href="/request">
          <button className="uniform-btn-nav">Request</button>
        </Nav.Link>
        <Nav.Link href="/about">
          <button className="uniform-btn-nav">About</button>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;