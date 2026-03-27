import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <style>{`
        .dashboard-wrapper {
          display: flex;
          height: 100vh; /* Full viewport height */
          width: 100vw;
          overflow: hidden;
          background-color: #fff;
          font-family: "Inter", -apple-system, sans-serif;
        }

        /* The Left Sidebar (Watchlist) */
        .watchlist-container {
          width: 350px; /* Standard Kite width */
          border-right: 1px solid #eee;
          height: 100%;
          overflow-y: auto;
          background: #fff;
          z-index: 10;
        }

        /* The Main Content Area */
        .content {
          flex: 1; /* Takes up remaining space */
          height: 100%;
          overflow-y: auto;
          padding: 20px 40px; /* Generous breathing room */
          background-color: #fff;
        }

        /* Custom Scrollbar for a cleaner look */
        .watchlist-container::-webkit-scrollbar,
        .content::-webkit-scrollbar {
          width: 4px;
        }

        .watchlist-container::-webkit-scrollbar-thumb,
        .content::-webkit-scrollbar-thumb {
          background: #e0e0e0;
          border-radius: 10px;
        }

        /* Responsive tweak: hide watchlist on very small screens if needed */
        @media (max-width: 768px) {
          .watchlist-container {
            width: 250px;
          }
        }
      `}</style>

      <GeneralContextProvider>
        {/* We wrap Watchlist in its own div to control the sidebar width */}
        <div className="watchlist-container">
          <WatchList />
        </div>
      </GeneralContextProvider>

      <main className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;