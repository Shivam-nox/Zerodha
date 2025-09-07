import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/landing.png"
          alt="Hero-Image"
          className="mb-5"
         
        />
        <h1 className="mt-5" style={{ color: "#424242" }}>
          Invest in everything
        </h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signUp">
          <button
            style={{
              width: "20%",
              margin: "0 auto",
              backgroundColor: "#387ed1",
            }}
            className="fs-5 btn btn-primary"
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
