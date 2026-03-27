import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",  
          "rgba(239, 68, 68, 0.8)",   
          "rgba(16, 185, 129, 0.8)",  
          "rgba(245, 158, 11, 0.8)",  
          "rgba(139, 92, 246, 0.8)",  
          "rgba(236, 72, 153, 0.8)",  
        ],
        borderColor: [
          "#3b82f6",
          "#ef4444",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
          "#ec4899",
        ],
        borderWidth: 2,
        hoverOffset: 8, 
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <style>{`
        .watchlist-container {
          width: 100%;
          height: 100%; 
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #eee;
          background: #fff;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .search-container {
          display: flex;
          align-items: center;
          padding: 0 15px;
          min-height: 50px;
          border-bottom: 1px solid #eee;
          background: #fff;
          z-index: 2;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.85rem;
          color: #444;
        }
        
        .search-input::placeholder {
          color: #9b9b9b;
        }

        .counts {
          font-size: 0.75rem;
          color: #9b9b9b;
        }

        .list-wrapper {
          flex: 1 1 auto;
          min-height: 0;
          overflow-y: auto;
          background: #fff;
          display: flex;
          flex-direction: column;
        }

        .list-wrapper::-webkit-scrollbar {
          width: 4px;
        }
        .list-wrapper::-webkit-scrollbar-thumb {
          background-color: #ddd;
          border-radius: 4px;
        }

        .list {
          margin: 0;
          padding: 0;
          list-style: none;
          flex: 1; 
        }

        .watchlist-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 15px;
          border-bottom: 1px solid #f7f7f7;
          cursor: pointer;
          position: relative;
          height: 60px;
          box-sizing: border-box;
        }

        .watchlist-item:hover {
          background-color: #f9f9f9;
        }

        .stock-name {
          font-size: 0.85rem;
          font-weight: 500;
          margin: 0;
        }

        .stock-data {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stock-data .percent {
          font-size: 0.75rem;
          color: #9b9b9b;
        }

        .stock-data .price {
          font-size: 0.85rem;
          font-weight: 500;
          color: #333; 
          min-width: 60px;
          text-align: right;
        }

        .up { color: #4caf50; }
        .down { color: #df514c; }

        .actions-overlay {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          background: #f9f9f9;
          display: flex;
          align-items: center;
          padding: 0 15px 0 25px;
          box-shadow: -15px 0 15px -5px #f9f9f9;
          gap: 6px;
        }

        .btn-action {
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-size: 0.75rem;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;
        }

        .btn-buy { background: #4184f3; color: #fff; padding: 0 14px; }
        .btn-sell { background: #ff5722; color: #fff; padding: 0 14px; }
        .btn-icon { background: #fff; color: #444; border: 1px solid #ddd; width: 30px; }
        .btn-icon:hover { border-color: #bbb; }

        /* Chart Area Styling */
        .chart-section {
          padding: 30px 20px;
          border-top: 1px solid #eee;
          background: #fafafa;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .chart-container {
          width: 100%;
          max-width: 280px; /* INCREASED FROM 220px to 280px */
          transition: transform 0.3s ease;
        }
      `}</style>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut, gold mcx"
          className="search-input"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <div className="list-wrapper">
        <ul className="list">
          {watchlist.map((stock, index) => (
            <WatchListItem stock={stock} key={index} />
          ))}
        </ul>

        <div className="chart-section">
          <div className="chart-container">
            <DoughnutChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="watchlist-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="stock-meta">
        <p className={`stock-name ${stock.isDown ? "down" : "up"}`}>
          {stock.name}
        </p>
      </div>

      <div className="stock-data">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown sx={{ fontSize: 16 }} className="down" />
        ) : (
          <KeyboardArrowUp sx={{ fontSize: 16 }} className="up" />
        )}
        <span className="price">{stock.price}</span>
      </div>

      {isHovered && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <div className="actions-overlay">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button className="btn-action btn-buy" onClick={() => openBuyWindow(uid)}>
          Buy
        </button>
      </Tooltip>
      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button className="btn-action btn-sell">
          Sell
        </button>
      </Tooltip>
      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button className="btn-action btn-icon">
          <BarChartOutlined sx={{ fontSize: 16 }} />
        </button>
      </Tooltip>
      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="btn-action btn-icon">
          <MoreHoriz sx={{ fontSize: 16 }} />
        </button>
      </Tooltip>
    </div>
  );
};

export default WatchList;