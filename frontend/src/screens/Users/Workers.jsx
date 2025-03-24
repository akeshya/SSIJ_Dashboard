import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export const Workers = () => {
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
export default Workers;
