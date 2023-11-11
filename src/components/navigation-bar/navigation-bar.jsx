import { Navbar, Container, Nav, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./navigation-bar.css";

export const NavigationBar = ({ user, onSearch, movies, onLoggedOut }) => {
    const [query, setQuery] = useState("");

    //filter list of movies based on search text
    const filterMovies = movies.filter((m) =>
        m.Title.toLowerCase().startsWith(query.toLowerCase())
    );

    /* const filterMovies = 
        query ? movies.filter((m) =>
        m.Title.toLowerCase().startsWith(query.toLowerCase())) : movies */

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
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    console.log(filterMovies);
                                    onSearch(filterMovies);
                                }}
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
