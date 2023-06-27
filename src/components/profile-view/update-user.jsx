// Update a user's info, by username
import { Container, Button, Form, Card, CardGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UpdateUser({
    updateuser,
    setUpdateuser,
    updatetoken,
    setUpdatetoken,
}) {
    const handleSubmit = (e) => {
        //this prevents default behaviour of the form which is to reload the page
        e.preventDefault();

        if (updateuser && updatetoken) {
            let data = { ...updateuser };
            fetch(
                `https://myflixapp-220423.herokuapp.com/user/${updateuser.Username}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${updatetoken}`,
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((e) => {
                    alert("oops, seems something went wrong");
                    console.log(e);
                });
            alert("Your details have been updated");
            window.location.reload();
        }
    };

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={8} md={4}>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Please Update Your Details
                                </Card.Title>
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <Form.Group controlId="profileForm">
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue={updateuser.Username}
                                            onChange={(e) => {
                                                setUpdateuser((updateuser) => {
                                                    return {
                                                        ...updateuser,
                                                        Username:
                                                            e.target.value,
                                                    };
                                                });
                                            }}
                                            placeholder="Change your username"
                                            minLength="3"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="profilePassword">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            defaultValue={updateuser.Password}
                                            onChange={(e) => {
                                                setUpdateuser((updateuser) => {
                                                    return {
                                                        ...updateuser,
                                                        Password:
                                                            e.target.value,
                                                    };
                                                });
                                            }}
                                            placeholder="Change your password"
                                            minLength="8"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="profileEmail">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            defaultValue={updateuser.Email}
                                            onChange={(e) => {
                                                setUpdateuser((updateuser) => {
                                                    return {
                                                        ...updateuser,
                                                        Email: e.target.value,
                                                    };
                                                });
                                            }}
                                            placeholder="Change your email address"
                                            minLength="3"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="profileBirthday">
                                        <Form.Label>Birthday:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            defaultValue={updateuser.Birthday}
                                            onChange={(e) => {
                                                setUpdateuser((updateuser) => {
                                                    return {
                                                        ...updateuser,
                                                        Birthday:
                                                            e.target.value,
                                                    };
                                                });
                                            }}
                                            placeholder="Change your date of birth"
                                        />
                                    </Form.Group>
                                    <Button variant="secondary" type="submit">
                                        Update user Details
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
}
