import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { useMediaQuery } from "react-responsive";

function NavigationBar() {
  // Tells the Navigation bar if the width of the screen is greater than 680 px
  const isMobile = useMediaQuery({ query: '(max-width: 680px)' });
  console.log ("Mobile device is " + isMobile);

  return (
    <Navbar expand="md" variant="light">
    <Container>
      {isMobile ? (
<Nav>Mobile Device Active</Nav>
      ) : (
        <Nav className="mx-auto">
        <Nav.Link href="/">
          <button className="uniform-btn-nav">Home</button>
        </Nav.Link>
        <Nav.Link href="/services">
          <button className="uniform-btn-nav">Services</button>
        </Nav.Link>
        <Nav.Link href="/request-form">
          <button className="uniform-btn-nav">Request</button>
        </Nav.Link>
        <Nav.Link href="/about">
          <button className="uniform-btn-nav">About</button>
        </Nav.Link>
      </Nav>
      )}
    </Container>
  </Navbar>
  );
}

export default NavigationBar;