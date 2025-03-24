import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ReportDetails from "../components/ReportDetails";
import OverviewTable from "../components/OverviewTable";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <ReportDetails />
        <OverviewTable />
      </div>
    </div>
  );
};

export default Dashboard;
