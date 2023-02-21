import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className='fs-3 fw-bold  mb-2 text-center'>Register Now</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="name" type="email" placeholder="Your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL </Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="PhotoURL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter passowrd " />
                        </Form.Group>

                        <Button className='px-4 mb-3' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <span>All ready Have an account? <Link to='/login'>Login</Link></span>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;