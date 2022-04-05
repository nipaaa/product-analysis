import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const {name, rating, review} = props.review;
    return (
        <div>
            <Card border="info" style={{ width: '23rem' }} className="review">
                <Card.Header>Name: {name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <Card.Footer>Rating: {rating}</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;