import React, {useContext} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cl from './Topbar.module.css';
import {AuthContext} from "../../context/authContext";
import {StoreContext} from "../../index";

const Topbar = ({children, title}) => {

    const {store} = useContext(StoreContext)

    return (
        <div className="d-flex flex-column m-1 w-100">
            <Navbar className='my-2' variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className={cl.topbarBrand + ' mx-2 '}>{title}</Navbar.Brand>
                    <Navbar id="navbar-light" className={cl.topbarProfile}>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-light"
                                title={store.user.email}
                                menuVariant="light"
                            >
                                <NavDropdown.Item href='/profile'>Профиль</NavDropdown.Item>
                                <NavDropdown.Item href='/login'>
                                    Выход
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Topbar;