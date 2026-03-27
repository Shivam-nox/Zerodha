import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid pb-5" style={{ backgroundColor: "#387ed1", color: "white" }}>
      
      {/* Top Navbar Area for Support */}
      <div className="container d-flex justify-content-between align-items-center p-4 mb-4">
        <h4 className="m-0 fw-semibold fs-5">Support Portal</h4>
        <a href="#!" className="text-white text-decoration-none border-bottom pb-1">
          Track Tickets
        </a>
      </div>

      {/* Main Hero Content */}
      <div className="container">
        <div className="row justify-content-between pb-5">
          
          {/* Left Column: Search & Quick Links */}
          <div className="col-12 col-md-7 mb-5 mb-md-0 px-4">
            <h1 className="fs-4 fw-normal mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            
            {/* Upgraded Search Input */}
            <div className="input-group mb-4 shadow-sm">
              <input 
                type="text" 
                className="form-control form-control-lg border-0" 
                placeholder="Eg. how do I activate F&O, why is my order rejected..." 
                aria-label="Search"
              />
              <span className="input-group-text bg-white border-0" id="basic-addon2">
                <i className="fa-solid fa-search text-muted"></i>
              </span>
            </div>
            
            {/* Quick Links */}
            <div className="d-flex flex-wrap gap-3" style={{ fontSize: "15px" }}>
              <a href="#!" className="text-white text-decoration-none text-underline-hover border-bottom pb-1">Track account opening</a>
              <a href="#!" className="text-white text-decoration-none text-underline-hover border-bottom pb-1">Track segment activation</a>
              <a href="#!" className="text-white text-decoration-none text-underline-hover border-bottom pb-1">Intraday margins</a>
              <a href="#!" className="text-white text-decoration-none text-underline-hover border-bottom pb-1">Kite user manual</a>
            </div>
          </div>

          {/* Right Column: Featured Topics */}
          <div className="col-12 col-md-4 px-4">
            <h2 className="fs-4 fw-normal mb-4">Featured</h2>
            <ol className="ps-3" style={{ lineHeight: "1.8" }}>
              <li className="mb-3">
                <a href="#!" className="text-white text-decoration-none text-underline-hover">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none text-underline-hover">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;