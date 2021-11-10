import React from 'react';
import { Link } from 'react-router-dom';

const MoreItem = (props) => {
    const {product} = props;
    const{id, name, img,price, description}= product;
    return (
        <div className="col-md-6 g-3  ">
        <div >
          <img src={img} className="card-img-top p-3 image" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-primary">{name}</h5>
            <p className="card-text">{description.slice(0,110)}...</p>
            <p>${price}</p>
            <br />
            <Link as={Link} to={`/explore/${id}`}><button className="btn btn-warning">Explore</button></Link>
          </div>
        </div>
      </div>
    );
};

export default MoreItem;









   