import React from 'react';
import UserReviews from '../../UserReviews/UserReviews';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
         
            <Products></Products>
            <div className="w-80  m-5 bg-info text-center"><hr/></div>
            <UserReviews></UserReviews>
            <div className="w-80  m-5 bg-info text-center"><hr/></div>
            <Location></Location>
            
        </div>
    );
};

export default Home;
