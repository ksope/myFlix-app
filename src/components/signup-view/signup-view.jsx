import { useState } from "react";
import { Container, Card, Button, Form, CardGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./signup-view.css";

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
        };

        fetch("https://myflixapp-220423.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();
            } else {
                alert("Signup failed");
            }
        });
    };
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={8} md={12}>
                    <CardGroup className="signupText">
                        <Card className="my-4">
                            <Card.Body>
                                <Card.Title>Please Register</Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group
                                        className="mt-3"
                                        controlId="formUsername"
                                    >
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            className="formControl"
                                            type="text"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            required
                                            placeholder="Enter your username"
                                            minLength="5"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        controlId="formPassword"
                                        className="mt-3"
                                    >
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            className="formControl"
                                            type="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                            placeholder="Enter your password"
                                            minLength="6"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        controlId="formEmail"
                                        className="mt-3"
                                    >
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            className="formControl"
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            placeholder="Enter your email address"
                                            minLength="3"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        controlId="formBirthday"
                                        className="mt-3"
                                    >
                                        <Form.Label>Birthday:</Form.Label>
                                        <Form.Control
                                            className="formControl"
                                            type="date"
                                            value={birthday}
                                            onChange={(e) =>
                                                setBirthday(e.target.value)
                                            }
                                            placeholder="Enter your date of birth"
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="mt-3"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};
