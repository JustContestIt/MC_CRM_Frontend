import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cl from './Topbar.module.css';

const Topbar = (props) => {

    return (
        <Navbar className='mt-2 mb-2' variant="light" bg="white" expand="lg">
            <Container fluid>
                <Navbar.Brand className={cl.topbarBrand + ' mx-2 '}>Главная</Navbar.Brand>
                <Navbar id="navbar-light" className={cl.topbarProfile}>
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-light"
                            title={props.username}
                            menuVariant="light"
                        >
                            <NavDropdown.Item href="#">Профиль</NavDropdown.Item>
                            <NavDropdown.Item href="#">Выход</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
};

export default Topbar;