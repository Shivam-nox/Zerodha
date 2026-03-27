import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5 py-5">
      
      {/* Header Section */}
      <div className="row text-center mb-5 pb-5 border-bottom">
        <h1 className="fw-bold" style={{ color: "#424242", fontSize: "3rem" }}>
          Pricing
        </h1>
        <h3 className="text-muted mt-3 fs-5 fw-normal">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Features Grid */}
      <div className="row text-center justify-content-center mt-5">
        
        {/* Feature 1 */}
        <div className="col-12 col-md-4 p-4 mb-5 mb-md-0">
          <img 
            src="media/images/pricing-eq.svg" 
            alt="Free equity delivery" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "200px" }} 
          />
          <h2 className="fs-3 fw-semibold" style={{ color: "#424242" }}>Free equity delivery</h2>
          <p className="text-muted mt-3 fs-6 px-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="col-12 col-md-4 p-4 mb-5 mb-md-0">
          <img 
            src="media/images/other-trades.svg" 
            alt="Intraday and F&O trades" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "200px" }} 
          />
          <h2 className="fs-3 fw-semibold" style={{ color: "#424242" }}>Intraday and F&O trades</h2>
          <p className="text-muted mt-3 fs-6 px-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="col-12 col-md-4 p-4">
          <img 
            src="media/images/pricing-eq.svg" 
            alt="Free direct MF" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "200px" }} 
          />
          <h2 className="fs-3 fw-semibold" style={{ color: "#424242" }}>Free direct MF</h2>
          <p className="text-muted mt-3 fs-6 px-3">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;