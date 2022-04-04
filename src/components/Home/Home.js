import React from 'react';

const Home = () => {
    return (
        <div className='container-fluid my-5'>
           <div className='row ms-1'>
               <div className='col-lg-6 col-sm-12 py-5 bg-light rounded-3 h-75'>
                    <h1>Cookies are made of butter and love... <span className='text-info'> Sugar and spice and everything nice...</span></h1>
                    <p className='text-secondary'>Our cookies are not just snacks. They’re feelings! Our warm cookies melt hearts. Treat your sweetie to our sweet treats! We put our hearts in our cookies. Not literally! Try our all-natural, fruit-based cookies. Fresh cookie deliveries every day! Indulge in sensual sweetness with our premium cookies! We use the best ingredients to ensure you’ll enjoy awesome cookies.The finest cookies, all freshly baked.Forget heartbreaks. Just don’t forget cookie breaks.</p>
               </div>
               <div className='col-lg-6 col-sm-12'>
                    <img className='img-fluid rounded-3 h-50 w-100' src="img/brown-cookies.jpg" alt="" />
               </div>

           </div>
        </div>
    );
};

export default Home;