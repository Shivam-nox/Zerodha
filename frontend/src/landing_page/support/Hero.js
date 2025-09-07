import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-1"></div>
        <div className="col-5 p-2 mb-4">
          <h1 className="fs-3 pb-2">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div style={{fontSize:"17px",paddingTop:"10px"}}>
          <a href="">Track account opening</a>
          <a href="">  Track segment activation</a>
          <a href="">  Intraday margins</a>
          <br></br>
          <a href="">  Kite user manual</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-2 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br></br>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
        <div className="col-1"></div>
      </div>
    </section>
  );
}

export default Hero;