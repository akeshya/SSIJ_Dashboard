import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export const Vendors = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-screen ">
        <Header />

        <div className="flex justify-center text-blue-700 mt-30 text-6xl">
          Coming Soon
        </div>
      </div>
    </div>
  );
};
export default Vendors;
