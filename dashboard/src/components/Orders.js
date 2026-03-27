import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://zerodha-backend-o0vr.onrender.com/allOrders")
      .then((res) => {
        setAllOrders(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="orders-container">
      <style>{`
        .orders-container {
          padding: 24px 32px;
          background: #ffffff;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0f172a;
          height: 100%;
          overflow-y: auto;
        }

        .orders-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 24px;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .orders-title span {
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

        .orders-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .orders-table th, 
        .orders-table td {
          padding: 14px 20px;
          text-align: right; /* Right align numbers by default */
          border-bottom: 1px solid #f1f5f9;
        }

        /* Left align the first column (Instrument names) */
        .orders-table th:first-child, 
        .orders-table td:first-child {
          text-align: left;
        }

        .orders-table th {
          font-weight: 500;
          color: #64748b;
          background-color: #f8fafc;
          white-space: nowrap;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }

        .orders-table tbody tr {
          transition: background-color 0.2s ease;
        }

        .orders-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .instrument-name {
          color: #3b82f6;
          font-weight: 500;
        }

        .qty-text {
          color: #475569;
        }

        .price-text {
          font-weight: 500;
          color: #0f172a;
        }

        /* --- Status Badges (Buy/Sell) --- */
        .mode-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mode-buy {
          background-color: #dbeafe;
          color: #2563eb;
        }

        .mode-sell {
          background-color: #fee2e2;
          color: #dc2626;
        }

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

        .btn-explore {
          margin-top: 20px;
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-explore:hover {
          background: #2563eb;
        }
      `}</style>

      <h3 className="orders-title">
        Orders <span>{allOrders.length}</span>
      </h3>

      {isLoading ? (
        <div className="empty-state">
          <p>Loading orders...</p>
        </div>
      ) : allOrders.length === 0 ? (
        <div className="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <p>You haven't placed any orders yet.</p>
          <button className="btn-explore">Explore Instruments</button>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, index) => {
                // Determine badge style based on mode
                const isBuy = stock.mode && stock.mode.toUpperCase() === "BUY";
                const modeClass = isBuy ? "mode-buy" : "mode-sell";

                return (
                  <tr key={index}>
                    <td className="instrument-name">{stock.name}</td>
                    <td className="qty-text">{stock.qty}</td>
                    <td className="price-text">
                      {/* Formats price to 2 decimal places if it's a number */}
                      {typeof stock.price === 'number' ? stock.price.toFixed(2) : stock.price}
                    </td>
                    <td>
                      <span className={`mode-badge ${modeClass}`}>
                        {stock.mode}
                      </span>
                    </td>
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

export default Orders;