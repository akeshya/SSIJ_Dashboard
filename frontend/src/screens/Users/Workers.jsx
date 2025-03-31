import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Sidebar from "../../components/Sidebar.jsx";
import Header from "../../components/Header.jsx";
import image1 from "../../assets/images/users/user-1.jpg";
import image2 from "../../assets/images/users/user-2.jpg";
import image3 from "../../assets/images/users/user-3.jpg";
import image4 from "../../assets/images/users/user-4.jpg";
import { CiExport } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const employees = [
  {
    image: image1,
    name: "Shree Jain",
    email: "shree@gmail.com",
    phone: "(908) 877-2594",
    Orders: "10",
    Action: "Button",
  },
  {
    image: image2,
    name: "Akshay Kirti",
    email: "Akshay@gmail.com",
    phone: "(717) 904-1435",
    Orders: "15",
    Action: "Button",
  },
  {
    image: image3,
    name: "Jayesh sukhwal",
    email: "Jayesh@gmail.com",
    phone: "(717) 633-7150",
    Orders: "20",
    Action: "Button",
  },
];

function Workers() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        {/* Main Content */}
        <div className="flex-1 px-6 mt-5">
          {/* Header */}

          <div className="ml-5 text-[16px]">
            <span className="text-[#CC7B25FF]">All(3)</span>
          </div>

          <div className="flex justify-between items-center bg-white p-4  ">
            <div className="flex border  border-gray-300 gap-1 p-2 rounded w-1/3">
              <FiSearch className="mt-1.5 gap-1" />
              <input
                type="text"
                placeholder="Search.."
                className="border-0 outline-0"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-1.5  transition border-2 border-[#CC7B25FF] px-2 py-1 rounded-md text-[#CC7B25FF]">
                <CiExport className="text-lg" />
                <span>Import</span>
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                <Link to={"/add-workers"}> Add Workers </Link>
              </button>
            </div>
          </div>

          {/* Employee Table */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-300">
            <table className="w-full border-collapse rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-neutral-500 text-sm font-semibold border-b border-gray-300">
                  <th className="p-2 text-left font-medium">User</th>
                  <th className="p-2 text-left">Phone</th>
                  <th className="p-2 text-left">Orders</th>
                  <th className="p-2 text-left">Action</th>
                  <th className="p-2 text-left">Edit</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-300 ${
                      index === employees.length - 1 ? "last:border-none" : ""
                    }`}
                  >
                    <td className="p-2 flex items-center space-x-2">
                      <img
                        src={emp.image}
                        alt={emp.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <Link to={"/worker-details"}>
                          {emp.name}
                          <br />
                        </Link>
                        <span className="text-[#6a6b6e]">{emp.email}</span>
                      </div>
                    </td>
                    <td className="p-2">{emp.phone}</td>
                    <td className="p-2">{emp.Orders}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleButtonClick(emp)}
                        className="px-4 py-2 bg-[#F3D8BCFF] rounded-lg hover:bg-[#424856FF]"
                      >
                        {emp.Action}
                      </button>
                    </td>
                    <td className="p-2">
                      <FaRegEdit className="text-gray-600 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Workers;
