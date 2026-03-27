import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5 py-5">
      
      {/* Top Heading Section */}
      <div className="row text-center mb-5 pb-4">
        <h1 className="fw-bold" style={{ color: "#424242", lineHeight: "1.5" }}>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Two Column Text Section */}
      <div className="row p-md-5 mt-5 border-top">
        
        {/* Left Column */}
        <div className="col-12 col-md-6 p-4 text-muted fs-5" style={{ lineHeight: "1.8" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-4 text-muted fs-5" style={{ lineHeight: "1.8" }}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#!" className="text-decoration-none fw-semibold" style={{ color: "#387ed1" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;