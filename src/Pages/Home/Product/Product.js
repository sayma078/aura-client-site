import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {product} = props;
    const{id, name, img, description}= product;
    return (
        <div className="col-md-6 g-3  ">
        <div >
          <img src={img} className="card-img-top p-3 image" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-info">{name}</h5>
            <p className="card-text">{description.slice(0,110)}...</p>
            <br />
            <Link as={Link} to={`/details/${id}`}><button className="btn btn-warning">Book now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Product;