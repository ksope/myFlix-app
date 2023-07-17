import { Navbar, Container, Nav, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


import "./navigation-bar.css";

export const NavigationBar = ({ user, handleSearch, onLoggedOut }) => {

    let searchData;

   

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="logoText">
                    Movies App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <Nav.Link
                                    className="navLinkText"
                                    as={Link}
                                    to="/login"
                                >
                                    Login
                                </Nav.Link>
                                <Nav.Link
                                    className="navLinkText"
                                    as={Link}
                                    to="/signup"
                                >
                                    Sign Up
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
                        <Form inline="true">
                            <Form.Control
                                onChange={
                                    (e) => {searchData = e.target.value
                                    {()=>handleSearch(searchData)}}
                                    }
                                type="text"
                                placeholder="Search for a movie"
                                className="mr-sm-2"
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
