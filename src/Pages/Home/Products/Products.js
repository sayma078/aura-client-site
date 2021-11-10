import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("/products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className="mt-5">
      <h2 className="text-warning ">Our Products</h2>
     <div className="container">
     <div className="row">
        {products.slice(0,6).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
     </div>
    </div>
   
    
    );
};

export default Products;
