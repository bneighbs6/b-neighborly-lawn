import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="md" variant='light'>
      <Container>
        <Nav className='mx-auto'>
            <Nav.Link href='/' to="/">
                Home
            </Nav.Link>
            <Nav.Link href='/services'>
                Services
            </Nav.Link>
            <Nav.Link href='/about'>
                About
            </Nav.Link>
            <Nav.Link href='/request-form'>
                Contact
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;