import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className='lh-1 fs-3 mb-2 fw-bold text-center'>Login Form</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button className='px-4 mb-3' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <span>Are you new on Dragon News? <Link to='/register'>Register Now</Link></span>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;