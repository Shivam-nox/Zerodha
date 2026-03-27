import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5 py-5">
      <div className="row p-4 mt-5 border-top">
        
        {/* Left Side: Calculator Link & Rules List */}
        <div className="col-12 col-md-8 p-4">
          <div className="mb-4">
            <a href="#!" className="text-decoration-none fw-semibold fs-5" style={{ color: "#387ed1" }}>
              Brokerage calculator <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
          
          <ul className="text-muted" style={{ lineHeight: "2", fontSize: "14px" }}>
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li className="mb-2">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li className="mb-2">
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Side: List of Charges Link */}
        <div className="col-12 col-md-4 p-4 text-md-center">
          <div className="mb-4">
            <a href="#!" className="text-decoration-none fw-semibold fs-5" style={{ color: "#387ed1" }}>
              List of charges <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;