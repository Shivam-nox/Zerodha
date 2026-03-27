import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://zerodha-backend-o0vr.onrender.com/allPositions")
      .then((res) => {
        setAllPositions(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="positions-container">
      <style>{`
        .positions-container {
          padding: 24px 32px;
          background: #ffffff;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0f172a;
          height: 100%;
          overflow-y: auto;
        }

        .positions-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 24px;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .positions-title span {
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: #64748b;
        }

        /* --- Table Styling --- */
        .table-wrapper {
          overflow-x: auto;
          background: #fff;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .positions-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .positions-table th, 
        .positions-table td {
          padding: 14px 20px;
          text-align: right; /* Right align numbers by default */
          border-bottom: 1px solid #f1f5f9;
        }

        /* Left align the first two columns (Product & Instrument) */
        .positions-table th:nth-child(1), 
        .positions-table td:nth-child(1),
        .positions-table th:nth-child(2), 
        .positions-table td:nth-child(2) {
          text-align: left;
        }

        .positions-table th {
          font-weight: 500;
          color: #64748b;
          background-color: #f8fafc;
          white-space: nowrap;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }

        .positions-table tbody tr {
          transition: background-color 0.2s ease;
        }

        .positions-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .instrument-name {
          color: #3b82f6;
          font-weight: 500;
        }

        /* --- Product Badge --- */
        .product-badge {
          display: inline-block;
          padding: 3px 8px;
          background-color: #f1f5f9;
          color: #475569;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* --- Status Colors --- */
        .profit { color: #16a34a; font-weight: 500; }
        .loss { color: #dc2626; font-weight: 500; }

        /* --- Empty State --- */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          color: #64748b;
          text-align: center;
        }

        .empty-state p {
          margin-top: 12px;
          font-size: 0.95rem;
        }
      `}</style>

      <h3 className="positions-title">
        Positions <span>{allPositions.length}</span>
      </h3>

      {isLoading ? (
        <div className="empty-state">
          <p>Loading positions...</p>
        </div>
      ) : allPositions.length === 0 ? (
        <div className="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <p>You don't have any open positions.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="positions-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {allPositions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>
                      <span className="product-badge">{stock.product}</span>
                    </td>
                    <td className="instrument-name">{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}>
                      {pnl > 0 ? "+" : ""}
                      {pnl.toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Positions;