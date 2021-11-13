import React from 'react';
import { AiFillStar } from "react-icons/ai";

const UserReview = ({review}) => {
    return (
        <div className="col-md-4">
            
            <div class="card mt-3">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{review?.userName}</li>
    <li class="list-group-item">{review?.description}</li>
    <li class="list-group-item"> 
    {review?.reviewRating === "1" ? 
              <div>
                <div className="text-warning">
                <AiFillStar />
                </div>
                <h6>Very Bad</h6>
              </div>
              :
              review?.reviewRating === "2" ? 
              <div>
                <div className="text-warning">
                <AiFillStar /> <AiFillStar />
                </div>
                <h6> Bad</h6>
              </div>
              :
              review?.reviewRating === "3" ? 
              <div>
                <div className="text-warning">
                <AiFillStar /> <AiFillStar /> <AiFillStar />
                </div>
                <h6>Good</h6>
              </div>
              :
              review?.reviewRating === "4" ? 
              <div>
                <div className="text-warning">
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                </div>
                <h6>Too Good</h6>
              </div>
              :
              review?.reviewRating === "5" ? 
              <div>
                <div className="text-warning">
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                </div>
                <h6>Awsome</h6>
              </div>
              : null
              }
     </li>
  </ul>
</div>
            </div>
    )
       
};

export default UserReview;