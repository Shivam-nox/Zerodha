import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  // Mock data - in a real app, these would come from an API or Props
  const nifty = { price: 22350.4, change: 110.2, percent: "0.50" };
  const sensex = { price: 73820.1, change: -45.3, percent: "0.06" };

  return (
    <header className="topbar-wrapper">
      <style>{`
        .topbar-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 60px;
          background: #fff;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 1001;
          font-family: "Inter", sans-serif;
          box-sizing: border-box;
        }

        .indices-container {
          display: flex;
          align-items: center;
          padding-left: 20px;
          gap: 30px;
          border-right: 1px solid #eee;
          height: 100%;
        }

        .index-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          cursor: default;
        }

        .index-name {
          color: #9b9b9b;
          font-weight: 500;
        }

        .index-price {
          font-weight: 600;
        }

        .index-change {
          font-size: 0.7rem;
        }

        /* Color coding for market movement */
        .up { color: #4caf50; }
        .down { color: #df514c; }

        /* Ensure Menu component takes up the remaining space */
        .menu-wrapper-inside-topbar {
          flex: 1;
        }

        /* Adjusting Menu internal styles via TopBar if needed */
        .topbar-wrapper .top-navbar {
          border-bottom: none !important; /* Remove double border */
        }
      `}</style>

      <div className="indices-container">
        {/* NIFTY 50 */}
        <div className="index-item">
          <span className="index-name">NIFTY 50</span>
          <span className={`index-price ${nifty.change >= 0 ? "up" : "down"}`}>
            {nifty.price.toLocaleString()}
          </span>
          <span className={`index-change ${nifty.change >= 0 ? "up" : "down"}`}>
            {nifty.change >= 0 ? "+" : ""}{nifty.change} ({nifty.percent}%)
          </span>
        </div>

        {/* SENSEX */}
        <div className="index-item">
          <span className="index-name">SENSEX</span>
          <span className={`index-price ${sensex.change >= 0 ? "up" : "down"}`}>
            {sensex.price.toLocaleString()}
          </span>
          <span className={`index-change ${sensex.change >= 0 ? "up" : "down"}`}>
            {sensex.change >= 0 ? "+" : ""}{sensex.change} ({sensex.percent}%)
          </span>
        </div>
      </div>

      <div className="menu-wrapper-inside-topbar">
        <Menu />
      </div>
    </header>
  );
};

export default TopBar;