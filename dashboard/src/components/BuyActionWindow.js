import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://zerodha-backend-o0vr.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="buy-window-container" id="buy-window" draggable="true">
      {/* Header Section */}
      <div className="header">
        <div className="header-title">
          <h3>
            Buy {uid} <span>x {stockQuantity} Qty</span>
          </h3>
        </div>
        {/* Optional: Add a subtle switch or text here for NSE/BSE */}
        <div className="market-options">BSE</div>
      </div>

      {/* Tabs Section */}
      <div className="tab">
        <button className="active">Regular</button>
        <button>Cover</button>
        <button>AMO</button>
      </div>

      {/* Inputs Section */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      {/* Footer / Buttons Section */}
      <div className="buttons">
        <span className="margin-required">Margin required: <strong>₹{(stockQuantity * stockPrice).toFixed(2)}</strong></span>
        <div className="action-buttons">
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;