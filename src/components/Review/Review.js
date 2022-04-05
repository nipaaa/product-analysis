import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, rating, review} = props.review;
    return (
        <div>
            <div className="col ">
                <div className="card review">
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">{review}</p>
                        <h6>Rating: {rating}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;