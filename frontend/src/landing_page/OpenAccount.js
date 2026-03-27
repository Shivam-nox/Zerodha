import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className='container mt-5 mb-5 py-5'>
      <div className='row text-center justify-content-center'>
        {/* Constraining width for better readability on large screens */}
        <div className="col-12 col-md-10 col-lg-8">
          
          <h2 className='mt-5 mb-4 fw-bold' style={{ color: "#424242", fontSize: "2.5rem" }}>
            Open a Zerodha account
          </h2>
          
          <p className='text-muted fs-5 mb-5'>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          
          {/* Styled Link instead of nested button */}
          <Link 
            to="/signUp"
            className='btn btn-primary fs-5 fw-semibold px-4 py-2 mb-5'
            style={{ backgroundColor: "#387ed1", border: "none", minWidth: "220px", borderRadius: "4px" }}
          >
            Sign up for free
          </Link>

        </div>
      </div>
    </div>
  );
}

export default OpenAccount;