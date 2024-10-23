import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="md" variant='dark' bg='success'>
      <Container>
        <Nav className='mx-auto'>
            <Nav.Link href='#home'>
                Home
            </Nav.Link>
            <Nav.Link href='#about'>
                About
            </Nav.Link>
            <Nav.Link href='#contact'>
                Contact
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;