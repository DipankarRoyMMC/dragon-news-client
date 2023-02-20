import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    console.log(news);
    const { _id, title, image_url, details, author } = news;

    return (
        <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className='d-flex'>
                    <Image roundedCircle style={{ height: '60px' }} src={author.img}></Image>

                    <div className='ms-3'>
                        <p className='mb-0'><strong>{author.name}</strong></p>
                        <p className='mb-0'>{author.published_date}</p>
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
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 100) + "..."} <Link to={`/news/${_id}`}>Read more</Link></p> : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card >
    );
};

export default NewsSummaryCard;