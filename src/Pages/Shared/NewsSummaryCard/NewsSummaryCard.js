import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating, total_view } = news;

    return (
        <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className='d-flex'>
                    <Image roundedCircle style={{ height: '60px' }} src={author?.img}></Image>

                    <div className='ms-3'>
                        <p className='mb-0'><strong>{author?.name}</strong></p>
                        <p className='mb-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <img className="w-100 my-3" src={image_url} alt="" />
                <div>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 100) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p> : <p>{details}</p>
                    }
                </div>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className="text-warning me-2"></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummaryCard;