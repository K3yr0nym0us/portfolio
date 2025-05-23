import { useMemo } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import logo from '../../assets/img/portafolio.svg';

import '../../styles/menu-fixed.css';

import { ClassMenu } from '../App';

enum IdActiveElement {
    one = 'HOME',
    two = 'HABILIDADES',
    three = 'FORMACIÓN',
    fourt = 'PROYECTOS',
    five = 'CONTACTO'
}

export const Menu = ({ claseMenu }: { claseMenu: ClassMenu }) => {
    const ElementsMenu = useMemo(() => {
        const menuTypes = ['HOME', 'HABILIDADES', 'FORMACIÓN', 'PROYECTOS', 'CONTACTO'];

        return menuTypes.map((menu) => {
            return (
                <Nav.Link 
                    key={menu}
                    id={ menu === IdActiveElement[claseMenu] ? 'active' : '' }
                    className='ms-2 me-2' 
                    href={`#${menu.toLowerCase()}`}
                >
                    {menu}
                </Nav.Link>
            )
        })
    }, [claseMenu, IdActiveElement])

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary menu-fixed p-0">
                <Container>
                    <img 
                        src={logo} 
                        alt="Logo" 
                        width="40" 
                        className="d-inline-block align-text-top me-2" 
                    />
                    <Navbar.Brand className='fs-3 fw-bold me-5'>
                        Mi Portafolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fs-4">
                            {ElementsMenu}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};