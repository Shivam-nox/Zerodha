import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div className='container mt-5 mb-5 py-5'>
      <div className='row align-items-center justify-content-center'>
        
        {/* Left Side: Text and Link */}
        <div className='col-12 col-md-5 mb-5 mb-md-0'>
          <h2 className='fw-bold mb-4' style={{ color: "#424242" }}>
            Unbeatable pricing
          </h2>
          <p className='text-muted fs-5 mb-4'>
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" className='text-decoration-none fw-semibold fs-5' style={{ color: "#387ed1", transition: "0.2s" }}>
            See pricing <i className="fa-solid fa-arrow-right ms-2"></i>
          </Link>
        </div>

        {/* Right Side: Pricing Icons and Details */}
        <div className='col-12 col-md-7'>
          <div className='row text-center'>
            
            {/* Pricing Item 1 */}
            <div className='col-12 col-sm-4 mb-4 mb-sm-0'>
              <img 
                src='media/images/pricing-eq.svg' 
                alt='Free account opening' 
                className='img-fluid mb-3' 
                style={{ maxWidth: "80px" }} 
              />
              <p className='text-muted m-0' style={{ fontSize: "14px", fontWeight: "500" }}>
                Free account <br /> opening
              </p>
            </div>

            {/* Pricing Item 2 */}
            <div className='col-12 col-sm-4 mb-4 mb-sm-0'>
              <img 
                src='media/images/pricing-eq.svg' 
                alt='Free equity delivery' 
                className='img-fluid mb-3' 
                style={{ maxWidth: "80px" }} 
              />
              <p className='text-muted m-0' style={{ fontSize: "14px", fontWeight: "500" }}>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            {/* Pricing Item 3 */}
            <div className='col-12 col-sm-4'>
              <img 
                src='media/images/other-trades.svg' 
                alt='Intraday and F&O' 
                className='img-fluid mb-3' 
                style={{ maxWidth: "80px" }} 
              />
              <p className='text-muted m-0' style={{ fontSize: "14px", fontWeight: "500" }}>
                Intraday and <br /> F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;