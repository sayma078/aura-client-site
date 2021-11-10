import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import './Explore.css';

const Explore = () => {
    const { id } = useParams();
    // const {name,img, cost, time, description} = explore;
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('/products.json')
          .then((res) => res.json())
          .then((data) => setExplore(data));
      }, []);
      const singleProduct = explore.find(product => parseInt(product.id) === parseInt(id));
    return (
      <div >
            <div className="col-md-8  container">
         <div >
          <div className="mt-4">
            <img className="img-fluid image" src={singleProduct?.img} alt="" />
       <div className="d-flex justify-content-center  mt-5 mb-2 ">
             <h3 className="me-5 text-primary">
               <i className="fas text-warning fa-dollar-sign"></i> {singleProduct?.price}
             
            </h3>
            <h3 className="text-primary ms-5">{singleProduct?.name}</h3>
             </div>
             
           <p>{singleProduct?.description}</p>
           </div>
         </div>
      </div>
    </div>
    );
};

export default Explore;