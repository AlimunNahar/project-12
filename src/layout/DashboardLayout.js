import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import FooterDashboard from "../Pages/Shared/Footer/FooterDashboard";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap bg-gradient-to-t from-indigo-400 justify-between px-8 p-3 text-lg">
        <Link to="/dashboard">My Orders</Link>|
        <Link to="/dashboard">My Orders</Link>|
        <Link to="/dashboard">My Orders</Link>|
        <Link to="/dashboard">My Orders</Link>
      </div>
      <Outlet />
      <FooterDashboard />
    </div>
  );
};

export default DashboardLayout;
