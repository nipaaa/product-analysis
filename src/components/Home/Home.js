import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const sliceReviews = reviews.slice(0,3);
    return (
        <div className='container-fluid my-5'>
            <div>
        <div className='d-flex mx-5 gap-5 align-items-center mb-5'>
          <div>
            <h1 className='fw-bold'>Cookies are made of butter and love... <span className='text-info'> Sugar and spice and everything nice...</span> </h1>
            <p className='fw-normal'>Our cookies are not just snacks. They’re feelings! Our warm cookies melt hearts. Treat your sweetie to our sweet treats! We put our hearts in our cookies. Not literally! Try our all-natural, fruit-based cookies. Fresh cookie deliveries every day! Indulge in sensual sweetness with our premium cookies! We use the best ingredients to ensure you’ll enjoy awesome cookies.The finest cookies, all freshly baked.Forget heartbreaks. Just don’t forget cookie breaks.</p>
          </div>
          <div className='image'>
            <img src="img/brown-cookies.jpg" alt="" />
          </div>
        </div>
      </div>

           <div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mx-5'>
            {
                sliceReviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
           
            <div className='text-center my-3'>
            <Link to="/reviews"><Button variant="outline-info fw-bolder">See More...</Button>{' '}</Link>
            </div>

           </div>
        </div>
    );
};

export default Home;