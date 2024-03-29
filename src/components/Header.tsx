import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>      
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">    
      <Container>
        <Navbar.Brand as={NavLink} to='/'>React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/tarea">Tareas</Nav.Link>
            <Nav.Link as={NavLink} to="/divisa">Divisas</Nav.Link> 
            <Nav.Link as={NavLink} to="/clima">Clima</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
        </Container>  
    </Navbar> 
   
    </>
  )
}

export default Header
