import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5 py-5">
      <div className="row align-items-center justify-content-center">
        
        {/* Left Side: Image */}
        <div className="col-12 col-md-6 mb-5 mb-md-0 text-center">
          <img 
            src='media/images/index-education.svg' 
            alt='Education Illustration' 
            className="img-fluid" 
            style={{ maxWidth: "75%" }} 
          />
        </div>

        {/* Right Side: Text & Links */}
        <div className="col-12 col-md-6 p-md-5">
          <h2 className="mb-4 fw-bold" style={{ color: "#424242" }}>
            Free and open market education
          </h2>
          
          <p className="text-muted fs-5 mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#!" className="text-decoration-none fw-semibold" style={{ color: "#387ed1" }}>
            Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
          
          <p className="text-muted fs-5 mt-5 mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#!" className="text-decoration-none fw-semibold" style={{ color: "#387ed1" }}>
            Trading Q&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;