import React from "react";

function Team() {
  return (
    <div className="container mt-5 mb-5 pb-5">
      
      {/* Title Section */}
      <div className="row p-3 mt-5 border-top">
        <h2 className="text-center fw-bold mt-5 mb-5" style={{ color: "#424242", fontSize: "2.5rem" }}>
          People
        </h2>
      </div>

      {/* Team Member Layout */}
      <div className="row align-items-center justify-content-center mt-3">
        
        {/* Image & Title Column */}
        <div className="col-12 col-md-5 text-center mb-5 mb-md-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath - Founder and CEO"
            className="img-fluid rounded-circle shadow-sm mb-4"
            style={{ maxWidth: "260px" }} // Restricts size so it never gets absurdly huge on desktop
          />
          <h4 className="fw-semibold" style={{ color: "#424242" }}>Nithin Kamath</h4>
          <p className="text-muted fs-6 mb-0">Founder, CEO</p>
        </div>

        {/* Bio Text Column */}
        <div className="col-12 col-md-6 p-4">
          <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
            Playing basketball is his zen.
          </p>
          <p className="text-muted fs-5 mt-4" style={{ lineHeight: "1.8" }}>
            Connect on{" "}
            <a href="#!" className="text-decoration-none fw-semibold mx-1" style={{ color: "#387ed1" }}>Homepage</a> /{" "}
            <a href="#!" className="text-decoration-none fw-semibold mx-1" style={{ color: "#387ed1" }}>TradingQnA</a> /{" "}
            <a href="#!" className="text-decoration-none fw-semibold mx-1" style={{ color: "#387ed1" }}>Twitter</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;