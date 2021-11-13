import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './Explore.css';

const Explore = () => {
    const { id } = useParams();
    // const {name,img, cost, time, description} = explore;
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch(`https://salty-citadel-46472.herokuapp.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setExplore(data));
      }, []);
      console.log(id);
     
    return (
      <div >
            <div className="col-md-8  container">
         <div >
          <div className="mt-4">
            <img className="img-fluid image" src={explore?.img} alt="" />
       <div className="d-flex justify-content-center  mt-5 mb-2 ">
             <h3 className="me-5 text-primary">
               <i className="fas text-warning fa-dollar-sign"></i> {explore?.cost}
             
            </h3>
            <h3 className="text-primary mb-4 ms-5">{explore?.name}</h3>
             </div>
             
           <p >{explore?.description}</p>
           </div>
         </div>
      </div>
      <Link to={`/purches/${id}`}><button className=" btn btn-warning justify-content-center">Purches</button></Link>
    </div>
    );
};

export default Explore;