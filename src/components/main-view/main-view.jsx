import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import NotFound from "../not-found/not-found";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfileView from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Container from "react-bootstrap/Container";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    useEffect(() => {
        if (!token) {
            return;
        }

        fetch("https://myflixapp-220423.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((movies) => {
                setMovies(movies);
            });
    }, [token]);

    return (
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={(user) => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
            <Container>
                <Row className="justify-content-md-center">
                    <Routes>
                        <Route
                            path="/signup"
                            element={
                                <>
                                    {user ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Col md={5}>
                                            <SignupView />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <>
                                    {user ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Col md={5}>
                                            <LoginView
                                                onLoggedIn={(user, token) => {
                                                    setUser(user);
                                                    setToken(token);
                                                }}
                                            />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/movies/:movieId"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : movies.length === 0 ? (
                                        <Col>The list is empty!</Col>
                                    ) : (
                                        <Col md={8}>
                                            <MovieView
                                                movies={movies}
                                                user={user}
                                            />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : movies.length === 0 ? (
                                        <Col>The list is empty!</Col>
                                    ) : (
                                        <>
                                            {movies.map((movie) => (
                                                <Col
                                                    className="mb-4"
                                                    key={movie._id}
                                                    md={3}
                                                >
                                                    <MovieCard movie={movie} />
                                                </Col>
                                            ))}
                                        </>
                                    )}
                                </>
                            }
                        />
                        <Route
                            path="/user"
                            element={
                                <>
                                    {!user ? (
                                        <Navigate to="/login" replace />
                                    ) : (
                                        <Col>
                                            <ProfileView
                                                movies={movies}
                                                onLoggedOut={(user) => {
                                                    setUser(null);
                                                    setToken(null);
                                                    localStorage.clear();
                                                }}
                                                token={token}
                                                user={user}
                                            />
                                        </Col>
                                    )}
                                </>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Row>
            </Container>
        </BrowserRouter>
    );
};

export default MainView;