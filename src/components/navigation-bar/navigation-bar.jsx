import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchMovie from "../search-movie/search-movie";

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Row>
                    <Col>
                        <Navbar.Brand as={Link} to="/">
                            Movies App
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {!user && (
                                    <>
                                        <Nav.Link as={Link} to="/login">
                                            Login
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/signup">
                                            Signup
                                        </Nav.Link>
                                    </>
                                )}
                                {user && (
                                    <>
                                        <Nav.Link as={Link} to="/">
                                            Home
                                        </Nav.Link>
                                        <Nav.Link as={Link} to={"/user"}>
                                            Profile
                                        </Nav.Link>
                                        <Nav.Link onClick={onLoggedOut}>
                                            Logout
                                        </Nav.Link>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col className="d-none d-lg-flex justify-content-end">
                        <SearchMovie />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};
