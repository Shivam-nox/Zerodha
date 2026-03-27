import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-wrapper">
      {/* Internal CSS */}
      <style>{`
        .funds-wrapper {
          padding: 25px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #444;
          max-width: 1200px;
          margin: 0 auto;
        }

        .funds-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
          margin-bottom: 30px;
        }

        .funds-header p {
          color: #666;
          font-size: 0.9rem;
        }

        .action-btns {
          display: flex;
          gap: 10px;
        }

        .btn {
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 3px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .btn-green { background: #4caf50; color: white; }
        .btn-blue { background: #4184f3; color: white; }
        .btn-blue-outline { border: 1px solid #4184f3; color: #4184f3; }
        .btn:hover { opacity: 0.9; transform: translateY(-1px); }

        .funds-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .section-header {
          font-size: 1.1rem;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          color: #333;
        }

        .margin-card {
          margin-bottom: 30px;
        }

        .margin-label {
          font-size: 0.8rem;
          color: #9ba6b2;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .margin-value {
          font-size: 2.5rem;
          font-weight: 300;
          margin: 5px 0;
          color: #4184f3;
        }

        .progress-container {
          width: 100%;
          height: 6px;
          background: #f1f1f1;
          border-radius: 10px;
          margin: 15px 0;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #4184f3;
          width: 48%; /* Mock value */
        }

        .data-list {
          width: 100%;
        }

        .data-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #f7f7f7;
          font-size: 0.9rem;
        }

        .data-item.bold {
          font-weight: 600;
          color: #333;
        }

        .divider {
          height: 1px;
          background: #eee;
          margin: 15px 0;
        }

        .commodity-box {
          border: 1px dashed #d1d1d1;
          background: #fafafa;
          border-radius: 8px;
          padding: 60px 20px;
          text-align: center;
        }

        .commodity-box p {
          color: #888;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
      `}</style>

      {/* Component Markup */}
      <header className="funds-header">
        <p>Instant, zero-cost fund transfers with <strong>UPI</strong></p>
        <div className="action-btns">
          <Link className="btn btn-green">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </header>

      <div className="funds-grid">
        {/* Equity Column */}
        <section className="equity-section">
          <h2 className="section-header">Equity</h2>
          
          <div className="margin-card">
            <span className="margin-label">Available margin</span>
            <h1 className="margin-value">4,043.10</h1>
            <div className="progress-container">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="data-list">
            <div className="data-item bold">
              <span>Used margin</span>
              <span>3,757.30</span>
            </div>
            <div className="data-item bold">
              <span>Available cash</span>
              <span>4,043.10</span>
            </div>
            
            <div className="divider"></div>

            {[
              { label: "Opening Balance", val: "3,736.40" },
              { label: "Payin", val: "4,064.00" },
              { label: "SPAN", val: "0.00" },
              { label: "Delivery margin", val: "0.00" },
              { label: "Exposure", val: "0.00" },
              { label: "Options premium", val: "0.00" }
            ].map((item, idx) => (
              <div className="data-item" key={idx}>
                <span>{item.label}</span>
                <span>{item.val}</span>
              </div>
            ))}

            <div className="divider"></div>

            <div className="data-item">
              <span>Total Collateral</span>
              <span>0.00</span>
            </div>
          </div>
        </section>

        {/* Commodity Column */}
        <section className="commodity-section">
          <h2 className="section-header">Commodity</h2>
          <div className="commodity-box">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue-outline">Open Account</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Funds;