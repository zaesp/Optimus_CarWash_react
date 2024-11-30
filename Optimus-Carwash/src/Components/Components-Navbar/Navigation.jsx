import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <Container>

        <Navbar.Brand href="/">Optimus CarWash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/servicios" className='nav-link'>Servicios</Link>
            <Link to="/reservas" className='nav-link'>Reserva</Link>
            <Link to="/puntos" className='nav-link'>Puntos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation