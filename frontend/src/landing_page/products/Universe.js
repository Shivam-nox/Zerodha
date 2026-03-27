import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 mb-5 py-5">
      
      <div className="row text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ color: "#424242" }}>The Zerodha Universe</h2>
        <p className="text-muted fs-5">
          Extend your trading and investment experience even further with our partner platforms.
        </p>
      </div>

      <div className="row text-center text-muted mb-5 justify-content-center">
        {/* Removed fixed <br> tags in favor of letting the grid handle spacing naturally */}
        
        <div className="col-12 col-sm-6 col-md-4 p-4">
          <img src="media/images/zerodhafundhouse.png" alt="Zerodha Fundhouse" className="img-fluid mb-3" style={{ height: "55px", objectFit: "contain" }} />
          <p className="text-small text-muted px-2">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4 p-4">
          <img src="media/images/sensibull-logo.svg" alt="Sensibull" className="img-fluid mb-3" style={{ height: "45px", objectFit: "contain" }} />
          <p className="text-small text-muted px-2">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest.
          </p>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4 p-4">
          <img src="media/images/smallcase-logo.png" alt="Smallcase" className="img-fluid mb-3" style={{ height: "55px", objectFit: "contain" }} />
          <p className="text-small text-muted px-2">
            Thematic investment platform. Extend your trading and investment experience even further with our partner platforms.
          </p>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4 p-4">
          <img src="media/images/tijori.svg" alt="Tijori" className="img-fluid mb-3" style={{ height: "55px", objectFit: "contain" }} />
          <p className="text-small text-muted px-2">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4 p-4">
          <img src="media/images/streak-logo.png" alt="Streak" className="img-fluid mb-3" style={{ height: "55px", objectFit: "contain" }} />
          <p className="text-small text-muted px-2">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
        
        <div className="col-12 col-sm-6 col-md-4 p-4">
          <img src="media/images/ditto-logo.png" alt="Ditto" className="img-fluid mb-3" style={{ height: "55px", objectFit: "contain" }} />
          <p className="text-small text-muted px-2">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link 
          to="/signUp"
          className="btn btn-primary fs-5 fw-semibold px-4 py-2"
          style={{ backgroundColor: "#387ed1", border: "none", minWidth: "220px", borderRadius: "4px" }}
        >
          Sign up for free
        </Link>
      </div>
      
    </div>
  );
}

export default Universe;