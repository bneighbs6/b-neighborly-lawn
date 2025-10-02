import Container from "react-bootstrap/Container";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  // Tells the Navigation bar if the width of the screen is greater than 680 px
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  console.log ("Mobile device is " + isMobile);

  return (
    <Navbar expand="md" variant="none">
      <Container>
        {isMobile ? (
          // Mobile Navigation
          <Dropdown>
            <Dropdown.Toggle className="mobile-dropdown-nav">
              <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/services">Services</Dropdown.Item>
              <Dropdown.Item href="/request-form">Request</Dropdown.Item>
              <Dropdown.Item href="/about">About</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          // Desktop Navigation
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