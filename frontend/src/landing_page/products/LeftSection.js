import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription, // Fixed typo here
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5 py-md-5">
      <div className="row align-items-center justify-content-center">
        
        {/* Left Side: Image */}
        <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxWidth: "85%" }} />
        </div>

        {/* Right Side: Text & Actions */}
        <div className="col-12 col-md-6 p-4 p-md-5">
          <h2 className="fw-bold mb-3" style={{ color: "#424242" }}>{productName}</h2>
          <p className="text-muted fs-5 mb-4" style={{ lineHeight: "1.6" }}>
            {productDescription}
          </p>
          
          {/* Action Links */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            {tryDemo && (
              <a href={tryDemo} className="text-decoration-none fw-semibold fs-5" style={{ color: "#387ed1" }}>
                Try Demo <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="text-decoration-none fw-semibold fs-5" style={{ color: "#387ed1" }}>
                Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            )}
          </div>

          {/* App Store Badges */}
          <div className="d-flex flex-wrap gap-3 mt-4">
            {googlePlay && (
              <a href={googlePlay}>
                <img src="media/images/google-play-badge.svg" alt="Google Play Badge" className="img-fluid" />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img src="media/images/appstore-badge.svg" alt="App Store Badge" className="img-fluid" />
              </a>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LeftSection;