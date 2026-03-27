import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='container mt-5 mb-5 py-5' style={{ minHeight: "60vh" }}>
      <div className='row text-center justify-content-center align-items-center h-100'>
        <div className="col-12 col-md-8 p-5">
          
          {/* Large, bold 404 text */}
          <h1 className='mt-5 fw-bold' style={{ color: "#424242", fontSize: "4rem" }}>
            404
          </h1>
          
          <h2 className="fs-3 mb-3 fw-semibold" style={{ color: "#424242" }}>
            Page not found
          </h2>
          
          <p className='text-muted fs-5 mb-5'>
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          
          {/* Escape hatch to the home page */}
          <Link 
            to="/"
            className="btn btn-primary fs-5 fw-semibold px-4 py-2"
            style={{ backgroundColor: "#387ed1", border: "none", borderRadius: "4px" }}
          >
            Go back home
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default NotFound;