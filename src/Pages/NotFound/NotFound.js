import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.png';

const NotFound = () => {
    return (
        <div>
        <img style={{ width: "100%", height: "550px" }} src={notFound} alt="" />
        <Link to="/">
          {" "}
          <button className=" btn btn-success mt-3">Go Back</button>
        </Link>
      </div>
    );
};

export default NotFound;