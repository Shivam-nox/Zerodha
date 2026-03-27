import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center mt-5 mb-5 pb-5">
      <div className="row justify-content-center">
        {/* Constraining the width on large screens so it doesn't stretch infinitely */}
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="media/images/landing.png"
            alt="Hero Illustration showing investment options"
            className="img-fluid mb-4" /* img-fluid makes the image responsive */
          />
          
          <h1 className="mt-4 fw-bold" style={{ color: "#424242", fontSize: "2.75rem" }}>
            Invest in everything
          </h1>
          
          <p className="fs-5 text-muted mt-3 mb-5">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>
          
          {/* Replaced <button> inside <Link> with just a styled <Link> for better HTML semantics */}
          <Link
            to="/signUp"
            className="btn btn-primary fs-5 fw-semibold px-4 py-2"
            style={styles.ctaButton}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  ctaButton: {
    backgroundColor: "#387ed1",
    border: "none",
    borderRadius: "4px",
    minWidth: "220px", // Use minWidth instead of % so it never gets too small on mobile
    transition: "background-color 0.2s ease-in-out"
  }
};

export default Hero;