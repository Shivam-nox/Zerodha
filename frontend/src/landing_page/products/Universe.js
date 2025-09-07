import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-3">
      <div className="row text-center text-muted " style={{ fontSize: "12px" }}>
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p style={{ fontSize: "17px" }}>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/zerodhafundhouse.png"
            style={{ width: "45%" }}
          />
          <p className="text-small text-muted p-4">
            Our asset management venture
            <br></br>
            that is creating simple and transparent index
            <br></br>
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/sensibull-logo.svg" style={{ width: "45%" }} />
          <p className="text-small text-muted p-4">
            Options trading platform that lets you <br></br>
            create strategies, analyze positions, and examine
            <br></br>
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/smallcase-logo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted p-4">
            Thematic investment platform Extend
            <br></br> your trading and investment experience
            <br></br>
            even further with our partner platforms.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/tijori.svg" style={{ width: "45%" }} />
          <p className="text-small text-muted p-4">
            Investment research platform
            <br></br>
            that offers detailed insights on stocks,
            <br></br>
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/streak-logo.png" style={{ width: "45%" }} />
          <p className="text-small text-muted p-4">
            Systematic trading platform that
            <br></br>allows you to create and backtest
            <br></br>
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/ditto-logo.png" style={{ width: "40%" }} />
          <p className="text-small text-muted p-4">
            Personalized advice on life
            <br></br>
            and health insurance. No spam
            <br></br>
            and no mis-selling.
          </p>
        </div>
         
        <Link to="/signUp">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", backgroundColor: "#387ed1" }}
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
