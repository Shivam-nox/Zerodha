import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-o0vr.onrender.com/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Modern blue color
        borderRadius: 4, // Rounded tops for the bar chart
      },
    ],
  };

  return (
    <div className="holdings-container">
      <style>{`
        .holdings-container {
          padding: 24px 32px;
          background: #ffffff;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0f172a;
          height: 100%;
          overflow-y: auto;
        }

        .holdings-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 24px;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .holdings-title span {
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: #64748b;
        }

        /* --- Table Styling --- */
        .table-wrapper {
          overflow-x: auto;
          margin-bottom: 32px;
        }

        .holdings-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }

        .holdings-table th, 
        .holdings-table td {
          padding: 12px 16px;
          text-align: right; /* Right align numbers by default */
          border-bottom: 1px solid #f1f5f9;
        }

        /* Left align the first column (Instrument names) */
        .holdings-table th:first-child, 
        .holdings-table td:first-child {
          text-align: left;
        }

        .holdings-table th {
          font-weight: 500;
          color: #64748b;
          white-space: nowrap;
        }

        .holdings-table tbody tr {
          transition: background-color 0.2s;
        }

        .holdings-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .instrument-name {
          color: #3b82f6;
          font-weight: 500;
        }

        /* --- Status Colors --- */
        .profit { color: #16a34a; }
        .loss { color: #dc2626; }

        /* --- Summary Section --- */
        .summary-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 32px;
          background: #fafbfc;
          border-radius: 8px;
        }

        .summary-col {
          flex: 1;
          text-align: center;
          border-right: 1px solid #e2e8f0;
        }

        .summary-col:last-child {
          border-right: none;
        }

        .summary-col h5 {
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 4px 0;
          color: #0f172a;
        }

        .summary-col p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .summary-col span.decimals {
          font-size: 1rem;
          color: #64748b;
        }

        .chart-wrapper {
          padding-top: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>

      <h3 className="holdings-title">
        Holdings <span>{allHoldings.length}</span>
      </h3>

      <div className="table-wrapper">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td className="instrument-name">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary-section">
        <div className="summary-col">
          <h5>
            29,875.<span className="decimals">55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="summary-col">
          <h5>
            31,428.<span className="decimals">95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="summary-col">
          <h5 className="profit">1,553.40 (+5.20%)</h5>
          <p>Total P&L</p>
        </div>
      </div>

      <div className="chart-wrapper">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;