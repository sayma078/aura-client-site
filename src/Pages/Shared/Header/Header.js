import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold" to="/"> <i class="far fa-lightbulb"></i> AURA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <Link className="nav-link active text-white" to="/home">
                Home
              </Link>
              <Link className="nav-link text-white" to="/moreItems">
                More Items
              </Link>
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Header;