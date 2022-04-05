import React from 'react';

const Review = (props) => {
    const {name, rating, review} = props.review;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6>{rating}</h6>
                        <p class="card-text">{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;