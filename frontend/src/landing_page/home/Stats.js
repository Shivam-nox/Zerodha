import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className='container my-5'>
      <div className='row align-items-center p-md-5'>
        
        {/* Left Side: Text Content */}
        <div className='col-12 col-md-6 p-4'>
          <h2 className="fs-2 fw-bold mb-5" style={{ color: "#424242" }}>Trust with confidence</h2>
          
          <div className="mb-4">
            <h3 className="fs-4 fw-semibold" style={{ color: "#424242" }}>Customer-first always</h3>
            <p className="text-muted fs-6">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4 fw-semibold" style={{ color: "#424242" }}>No spam or gimmicks</h3>
            <p className="text-muted fs-6">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4 fw-semibold" style={{ color: "#424242" }}>The Zerodha universe</h3>
            <p className="text-muted fs-6">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4 fw-semibold" style={{ color: "#424242" }}>Do better with money</h3>
            <p className="text-muted fs-6">
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Right Side: Images and Links */}
        <div className='col-12 col-md-6 p-4 text-center'>
          <img 
            src='media/images/ecosystem.png' 
            alt='Zerodha Ecosystem' 
            className='img-fluid mb-4' 
          />
          
          <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            <Link to="/products" className="text-decoration-none fw-semibold" style={{ color: "#387ed1" }}>
              Explore our products <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
            <a href="#!" className="text-decoration-none fw-semibold" style={{ color: "#387ed1" }}>
              Try Kite Demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
          
          <img 
            src='media/images/press-logos.png' 
            alt='Press Logos' 
            className='img-fluid w-75 mx-auto d-block' 
          />
        </div>

      </div>
    </div>
  );
}

export default Stats;