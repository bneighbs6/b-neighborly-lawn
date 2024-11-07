import Container from "react-bootstrap/Container";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant="light">
      <Container>
        <Nav className="mx-auto">
          <Button
            variant="primary"
            style={{ backgroundColor: "#003f85", border: "none" }}
          >
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Nav.Link>
          </Button>

          <Button
            variant="primary"
            style={{ backgroundColor: "#003f85", border: "none" }}
          >
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              Services
            </Nav.Link>
          </Button>

          <Button
            variant="primary"
            style={{ backgroundColor: "#003f85", border: "none" }}
          >
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Nav.Link>
          </Button>

          <Button
            variant="primary"
            style={{ backgroundColor: "#003f85", border: "none" }}
          >
            <Nav.Link
              as={Link}
              to="home"
              smooth={true}
              duration={500}
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Nav.Link>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
