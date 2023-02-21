import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const from = location.state?.from?.pathname || '/';

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className='lh-1 fs-3 mb-2 fw-bold text-center'>Login Form</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Text className="text-danger m-0 mb-2 d-block">
                            {error}
                        </Form.Text>

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