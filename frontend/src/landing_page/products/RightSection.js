import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 mb-5 py-md-5">
      <div className="row align-items-center justify-content-center">
        
        {/* Left Side: Text & Actions (Stacks BELOW image on mobile) */}
        <div className="col-12 col-md-6 p-4 p-md-5 order-2 order-md-1">
          <h2 className="fw-bold mb-3" style={{ color: "#424242" }}>{productName}</h2>
          <p className="text-muted fs-5 mb-4" style={{ lineHeight: "1.6" }}>
            {productDescription}
          </p>
          <div>
            {learnMore && (
              <a href={learnMore} className="text-decoration-none fw-semibold fs-5" style={{ color: "#387ed1" }}>
                Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Image (Stacks ON TOP of text on mobile) */}
        <div className="col-12 col-md-6 text-center mb-5 mb-md-0 order-1 order-md-2">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxWidth: "85%" }} />
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;