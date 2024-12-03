import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imagenes from '../../assets/imagenes';
import "../Components-Navbar/Navigation.css"

const Navigation = () => {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary ">

      <Container id='Container_Navbar'>

        <Navbar.Brand href="/" className='logo_conten'>
          <img className='logo_nav' src={imagenes.img3} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav ">

          <Nav className="me-auto ">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/promociones" className='nav-link'>Promociones</Link>
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