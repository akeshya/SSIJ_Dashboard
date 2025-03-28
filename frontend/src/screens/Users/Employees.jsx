import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Sidebar from "../../components/Sidebar.jsx";
import Header from "../../components/Header.jsx";
import image1 from "../../assets/images/users/user-4.jpg";
import image2 from "../../assets/images/users/user-5.jpg";
import image3 from "../../assets/images/users/user-6.jpg";
import image4 from "../../assets/images/users/user-4.jpg";
import { CiExport } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const employees = [
  {
    image: image1,
    name: "Kanu Suk",
    email: "shree1996@gmail.com",
    phone: "(908) 877-2594",
    role: "Admin",
    city: "Banagalore",
  },
  {
    image: image2,
    name: "kumari jain",
    email: "kum@gmail.com",
    phone: "(1234) 904-1435",
    role: "Editor",
    city: "Electronic City",
  },
  {
    image: image3,
    name: "Kishan Shree",
    email: "josephanderson@yahoo.com",
    phone: "(717) 633-7150",
    role: "Developer",
    city: "Houston",
  },
];

function Employee() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          {/* Header */}

          <div className="ml-5 text-[16px]">
            <span className="text-[#CC7B25FF]">All(3)</span>
          </div>

          <div className="flex justify-between items-center bg-white p-4 shadow-md mb-4">
            <div className="flex border gap-1 p-2 rounded w-1/3">
              <FiSearch className="mt-1.5 gap-1" />
              <input
                type="text"
                placeholder="Search.."
                //className="border p-2 rounded w-1/3"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-1.5  transition border-2 border-[#CC7B25FF] px-2 py-1 rounded-md text-[#CC7B25FF]">
                <CiExport className="text-lg" />
                <span>Import</span>
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                <Link to={"/add-employee"}>Add Employee</Link>
              </button>
            </div>
          </div>

          {/* Employee Table */}
          <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-lg font-bold mb-2"></h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-[#CC7B25FF]">
                  <th className="p-2 text-left">User</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Phone</th>
                  <th className="p-2 text-left">Role</th>
                  <th className="p-2 text-left">City</th>
                  <th className="p-2 text-left">Edit</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2 flex items-center space-x-2">
                      <img
                        src={emp.image}
                        alt={emp.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{emp.name}</span>
                    </td>
                    <td className="p-2">{emp.email}</td>
                    <td className="p-2">{emp.phone}</td>
                    <td className="p-2">
                      <span
                        className="px-2 py-1 rounded text-white text-xs"
                        style={{
                          backgroundColor:
                            emp.role === "Admin"
                              ? "orange"
                              : emp.role === "Editor"
                              ? "blue"
                              : "green",
                        }}
                      >
                        {emp.role}
                      </span>
                    </td>
                    <td className="p-2">{emp.city}</td>
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
export default Employee;
