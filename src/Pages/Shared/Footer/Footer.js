import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-dark py-3 mb-2'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='text-center text-white'>
                            <small>Copyright &copy; 2023</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;