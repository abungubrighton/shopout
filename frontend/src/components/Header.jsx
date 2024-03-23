import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const logoutHandler = () => { 
        dispatch(logout());
    };
    return (
        <header>
            <Navbar expand="lg" className="bg-dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Shopout</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/cart">
                                <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="usename">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>


                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
                                </LinkContainer>

                            )}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header