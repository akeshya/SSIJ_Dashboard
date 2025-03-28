import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const AddWorkers = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
      </div>
    </div>
  );
};

export default AddWorkers;
