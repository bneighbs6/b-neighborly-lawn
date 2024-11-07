import Container from 'react-bootstrap/Container';
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll'; // Import Link from react-scroll

function NavigationBar() {
  return (
    <Navbar expand="md" variant='light'>
      <Container>
        <Nav className='mx-auto'>
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="services" smooth={true} duration={500}>
                Services
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>
                About
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
                Contact
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;