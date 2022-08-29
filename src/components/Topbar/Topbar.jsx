import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cl from './Topbar.module.css';
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";

const Topbar = ({children, title}) => {

    const { auth } = useAuth()

    return (
        <div className="d-flex flex-column m-1 w-100">
            <Navbar className='my-2' variant="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className={cl.topbarBrand + ' fs-1'}>{title}</Navbar.Brand>
                    <Navbar id="navbar-light" className={cl.topbarProfile}>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-light"
                                title={auth.username || auth.user || "JCI"}
                                menuVariant="light"
                                className='px-4 mx-4'
                            >
                                <NavDropdown.Item href='/profile'>Профиль</NavDropdown.Item>
                                <NavDropdown.Item href='/login' onClick={useLogout}>
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