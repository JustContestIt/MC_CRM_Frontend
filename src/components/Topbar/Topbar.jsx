import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cl from './Topbar.module.css';

const Topbar = (props) => {

    return (
        <Navbar variant="light" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className={cl.topbarBrand}>Главная</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-light"/>
                <Navbar.Collapse id="navbar-light" className={cl.topbarProfile}>
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-light"
                            title={props.username}
                            menuVariant="light"
                        >
                            <NavDropdown.Item href="#action/3.1">Профиль</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Выход</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Topbar;