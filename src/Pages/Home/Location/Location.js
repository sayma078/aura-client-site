import React from 'react';

const Location = () => {
    return (
        <div className="container  ">
      <h2 className="text-warning text-center fst-italic fw-bold m-5 ">Location</h2>
      <div className="mt-5 row  d-flex justify-content-center">
        <div className="card-body col-md-3 ">
          <h2>
            <i className="fas fa-phone-volume text-primary"></i>
          </h2>
          <h3>Emergency Phone</h3>
          <p className="card-text">415-205-5550 Call us Anytime 24/7</p>
        </div>

        <div className="card-body col-md-3">
          <h2>
            <i className="fas fa-address-card text-primary"></i>
          </h2>
          <h3>Address</h3>
          <p className="card-text">
            500 Linden Ave, South San Francisco, <br /> CA 94080, United States{" "}
          </p>
        </div>

        <div className="card-body col-md-3">
          <h2>
            <i className="fas fa-phone-square-alt text-primary"></i>
          </h2>
          <h3>Order By Phone</h3>
          <p className="card-text">415-205-5550 405-222-5551</p>
        </div>

        <div className="card-body col-md-3">
          <h2>
            <i className="fas fa-envelope text-primary"></i>
          </h2>
          <h3>Email Us</h3>
          <p className="card-text">
            office@denticare.com emergencies@denticare.com
          </p>
        </div>
      </div>
    </div>
    );
};

export default Location;