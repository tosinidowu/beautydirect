import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import '../assets/Navbar.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Beauty Direct</a>
          
          {/* Search bar */}
          <div className="d-flex align-items-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary search-button" type="submit">Search</button>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active dropdown-link me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Beauty Direct for Business
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active write-review-link" aria-current="page" href="#" >Write a Review</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active login-button" id = "login-button" aria-current="page" href="/login">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active signup-button" href="/login">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
   
}

export default Navbar;