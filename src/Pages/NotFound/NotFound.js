import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
        <img style={{ width: "100%", height: "550px" }} src={notfound} alt="" />
        <Link to="/">
          {" "}
          <button className="bg-warning mt-3">Go Back</button>
        </Link>
      </div>
    );
};

export default NotFound;