import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5 py-5">
      <div className="text-center mt-5 p-3">
        <h1 className="fw-bold" style={{ color: "#424242", fontSize: "3rem" }}>
          Technology
        </h1>
        <h3 className="text-muted mt-3 mb-4 fs-4 fw-normal">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-4 mb-5 fs-5">
          Check out our{" "}
          <a href="#!" className="text-decoration-none fw-semibold" style={{ color: "#387ed1" }}>
            investment offerings <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;