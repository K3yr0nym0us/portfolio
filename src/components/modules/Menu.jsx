import '../../styles/menu-fixed.css';
import logo from '../../assets/img/portafolio.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Menu = ({ claseMenu }) => {

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary menu-fixed p-0">
                <Container>
                    <img src={ logo } alt="Logo" width="40" className="d-inline-block align-text-top me-2" />
                    <Navbar.Brand className='fs-3 fw-bold me-5'>Portafolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fs-4">
                            <Nav.Link id={ claseMenu === 'one' ? 'active' : '' } href="#one" >HOME</Nav.Link>
                            <Nav.Link id={ claseMenu === 'two' ? 'active' : '' } href="#habilidades" >HABILIDADES</Nav.Link>
                            <Nav.Link id={ claseMenu === 'three' ? 'active' : '' } href="#formacion" >FORMACIÓN</Nav.Link>
                            <Nav.Link id={ claseMenu === 'fourt' ? 'active' : '' } href="#proyectos" >PROYECTOS</Nav.Link>
                            <Nav.Link id={ claseMenu === 'five' ? 'active' : '' } href="#contacto" >CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};