import { getAuth, signOut } from '@firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginUser("");
      })
      .catch((error) => {});
  };
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
              { loginUser?.email && <Link class="nav-link text-white" to="/addProduct">
              Add Service
              </Link>}
              {loginUser?.email ? (
                <Link onClick={handleLogout} className="nav-link text-white" as={Link} to="#">
                  logOut {""}
                  {loginUser?.displayName}
                </Link>
              ) : (
                <Link className="nav-link text-white" as={Link} to="/login">
                  login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Header;