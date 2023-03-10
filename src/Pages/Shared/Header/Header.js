import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className="mb-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-white' to='/'>Dragon News</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All Categories</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {
                            user?.uid ?
                                <>
                                    <span className='text-white text-capitalize'>{user.displayName}</span>
                                    <Button className="mx-3" onClick={handleLogOut}
                                        variant="primary"
                                    >Logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>
                                        <Button className='me-3' variant="secondary">Login</Button>
                                    </Link>
                                    <Link to='/'>
                                        <Button variant="primary">Logout</Button>
                                    </Link>
                                </>
                        }

                        <Nav.Link href="#deets">
                            {user?.photoURL ? <Image roundedCircle style={{ height: '40px', width: '40px' }} src={user?.photoURL}></Image> : <FaUserAlt></FaUserAlt>}
                        </Nav.Link>
                    </Nav>
                    <div className='d-md-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;