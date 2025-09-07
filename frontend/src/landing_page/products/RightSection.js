import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More →</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;