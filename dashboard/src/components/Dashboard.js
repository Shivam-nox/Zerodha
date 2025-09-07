// import React from "react";
import { useEffect } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import axios from "../AxiosConfig";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  //  const [userData, setUserData] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    axios.get("/dashboard")
      .then((res) => {
        if (!res.data.username) {
          // Not authenticated, go back to login
          window.location.href = "https://zerodhaclone-yo3g.onrender.com/login";
        }
      })
      .catch(() => {
        window.location.href = "https://zerodhaclone-yo3g.onrender.com/login";
      });
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
