import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MoreItem from '../MoreItem/MoreItem';

const MoreItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    console.log(products)

    return (
        <div className="mt-5">
        <h2 className="text-warning ">All Products</h2>
       <div className="container">
       <div className="row">
          {products.map((product) => (
            <MoreItem key={product._id} product={product}></MoreItem>
          ))}
        </div>
       </div>
      </div>
    );
};

export default MoreItems;