import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fix-top navbar navbar-expand-md navbar-dark bg-dark">
      <img
        src="../images/home-images/logo.png"
        alt="letter b cube logo"
        className="logo"
      />
      <Link to="/">
        <div className="nav-item active">
          <p3>Vincent Gines</p3>
        </div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <div className="nav-link">
              <Link to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </div>
          </li>
          <li className="nav-item">
          <div className="nav-link">
              <Link to="/contact">
                Contact <span className="sr-only">(current)</span>
              </Link>
            </div>
          </li>
          <li className="nav-item">
          <div className="nav-link">
              <Link to="/portfolio">
                Portfolio <span className="sr-only">(current)</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
