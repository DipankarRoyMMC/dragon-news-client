import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import CarouselBrand from '../CarouselBrand/CarouselBrand';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error));

    }

    return (
        <div className='border rounded shadow p-3'>
            <div className='mb-3'>
                <ButtonGroup vertical className="w-100">
                    <Button onClick={handleGoogleSignIn} className="mb-2 rounded" variant="outline-primary">
                        <FaGoogle></FaGoogle> Singin with Google</Button>
                    <Button className="rounded" variant="outline-dark">
                        <FaGithub></FaGithub> Signin With Github</Button>
                </ButtonGroup>
            </div>
            <div className='mb-4'>
                <h5>Find on us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaGithub></FaGithub> Github</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='rounded border'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <CarouselBrand></CarouselBrand>
            </div>
        </div >
    );
};

export default RightSideNav;