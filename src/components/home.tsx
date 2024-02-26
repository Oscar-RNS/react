import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

/*interface Props {     
  formDatos: string;
}

const Home = ({formDatos} : Props) => {*/
const Home = () => {    
    return (
    <>   
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Menu 1</Nav.Link>
            <Nav.Link href="#pricing">Menu 2</Nav.Link>
            {/*<NavDropdown title="Menu 3" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Link 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Link 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Link 4
              </NavDropdown.Item>
              </NavDropdown>*/}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    ) 
}

export default Home
