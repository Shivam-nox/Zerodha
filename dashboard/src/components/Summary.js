import React from "react";

const Summary = () => {
  return (
    <div className="summary-container">
      <style>{`
        .summary-container {
          padding: 40px 60px;
          font-family: "Inter", -apple-system, sans-serif;
          color: #444;
        }

        .username-greeting {
          font-size: 1.5rem;
          font-weight: 500;
          color: #444;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }

        .section-header {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 40px;
          margin-top: 40px;
          color: #444;
        }

        .equity-data-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
        }

        .margin-main {
          flex: 0 0 250px; /* Fixed width for the big number area */
        }

        .margin-value {
          font-size: 3.5rem;
          font-weight: 300; /* Light weight is key to the Kite look */
          margin: 0;
          color: #444;
          line-height: 1;
        }

        .margin-label {
          font-size: 0.85rem;
          color: #9b9b9b;
          margin-top: 10px;
        }

        /* Vertical divider between big number and stats */
        .v-line {
          width: 1px;
          height: 80px;
          background-color: #eee;
          margin: 0 40px;
        }

        .margin-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-row {
          display: flex;
          gap: 15px;
          font-size: 0.9rem;
        }

        .stat-label {
          color: #9b9b9b;
          min-width: 120px;
        }

        .stat-value {
          color: #444;
          font-weight: 400;
        }

        .divider-full {
          height: 1px;
          background-color: #eee;
          margin: 40px 0;
          width: 100%;
        }

        .holdings-title {
          font-size: 1.2rem;
          font-weight: 500;
          color: #444;
        }
      `}</style>

      <h1 className="username-greeting">Hi, User!</h1>

      <div className="section-header">Equity</div>

      <div className="equity-data-wrapper">
        <div className="margin-main">
          <h2 className="margin-value">3.74k</h2>
          <p className="margin-label">Margin available</p>
        </div>

        <div className="v-line"></div>

        <div className="margin-stats">
          <div className="stat-row">
            <span className="stat-label">Margins used</span>
            <span className="stat-value">0</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Opening balance</span>
            <span className="stat-value">3.74k</span>
          </div>
        </div>
      </div>

      <div className="divider-full"></div>

      <div className="holdings-title">Holdings (13)</div>
    </div>
  );
};

export default Summary;