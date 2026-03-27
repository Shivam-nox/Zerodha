import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  // Extract username from URL params
  const query = new URLSearchParams(location.search);
  const username = query.get("username") || "User";

  // Active route detection
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="top-navbar">
      <style>{`
        .top-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          height: 60px;
          background: #fff;
          border-bottom: 1px solid #eee;
          width: 100%;
          box-sizing: border-box;
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: "Inter", -apple-system, sans-serif;
        }

        .nav-section {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .logo-img {
          width: 28px;
          margin-right: 35px;
        }

        .nav-links-list {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .nav-links-list li {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .nav-item {
          text-decoration: none;
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
          transition: color 0.2s;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
        }

        .nav-item:hover {
          color: #3b82f6;
        }

        .nav-item.active {
          color: #3b82f6;
        }

        /* The underline effect exactly like Zerodha */
        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #3b82f6;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          padding-left: 20px;
          border-left: 1px solid #e2e8f0;
          height: 30px;
        }

        .user-avatar {
          width: 28px;
          height: 28px;
          background: #f1f5f9; 
          color: #3b82f6;    
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .user-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
        }

        /* --- Logout Button Styling --- */
        .logout-link {
          margin-left: 24px;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748b;
          padding: 6px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .logout-link:hover {
          color: #dc2626; /* Deep Red */
          border-color: #fca5a5;
          background-color: #fef2f2;
        }
      `}</style>

      <div className="nav-section">
        {/* Make sure you have your logo.png in the public folder */}
        <img src="logo.png" className="logo-img" alt="Logo" />
        <ul className="nav-links-list">
          <li><Link to="/" className={`nav-item ${isActive("/") ? "active" : ""}`}>Dashboard</Link></li>
          <li><Link to="/orders" className={`nav-item ${isActive("/orders") ? "active" : ""}`}>Orders</Link></li>
          <li><Link to="/holdings" className={`nav-item ${isActive("/holdings") ? "active" : ""}`}>Holdings</Link></li>
          <li><Link to="/positions" className={`nav-item ${isActive("/positions") ? "active" : ""}`}>Positions</Link></li>
          <li><Link to="/funds" className={`nav-item ${isActive("/funds") ? "active" : ""}`}>Funds</Link></li>
          <li><Link to="/apps" className={`nav-item ${isActive("/apps") ? "active" : ""}`}>Apps</Link></li>
        </ul>
      </div>

      <div className="nav-section">
        <div className="profile-section">
          <div className="user-avatar">{username[0].toUpperCase()}</div>
          <span className="user-name">{username}</span>
        </div>
        
        {/* External redirect to the login/landing page */}
        <a href="https://zerodhaclone-yo3g.onrender.com" className="logout-link">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Menu;