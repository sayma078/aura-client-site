import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserReview from '../UserReview/UserReview';

const UserReviews = () => {
    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
          .then(res => res.json())
          .then(data => setUserReview(data))
    })
    return (
        <div className="mt-5 container">
        <h2 className="text-warning text-center fst-italic fw-bold m-5 ">Users Review</h2>
        <div className="row">
             {
                  userReview.map((review) => (
                  <UserReview key={review._id} review={review}>
                  </UserReview>))
              }
        </div>
      </div>
      
    );
};

export default UserReviews;