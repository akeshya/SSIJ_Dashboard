import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { FaRegEdit } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import Pagination from "../../components/Pagination";

export const Retailers = () => {
  const data = [
    {
      company_name: "Ravi Enterprises",
      user_id: "USR001",
      open_orders_grams: 1500,
      six_months_order_grams: 12000,
      location: "Mumbai",
      action: "Edit",
    },
    {
      company_name: "SmoozeShift Technologies",
      user_id: "USR002",
      open_orders_grams: 1800,
      six_months_order_grams: 13500,
      location: "Delhi",
      action: "Edit",
    },
    {
      company_name: "Kanu Jewellers Pvt. Ltd.",
      user_id: "USR003",
      open_orders_grams: 2200,
      six_months_order_grams: 14500,
      location: "Kolkata",
      action: "Edit",
    },
    {
      company_name: "Krishna Electronics",
      user_id: "USR004",
      open_orders_grams: 1000,
      six_months_order_grams: 8500,
      location: "Chennai",
      action: "Edit",
    },
    {
      company_name: "Deendayal Nellore Inc.",
      user_id: "USR005",
      open_orders_grams: 1350,
      six_months_order_grams: 11500,
      location: "Nellore",
      action: "Edit",
    },
    {
      company_name: "Vishnu Chennai Limited",
      user_id: "USR006",
      open_orders_grams: 1600,
      six_months_order_grams: 12500,
      location: "Chennai",
      action: "Edit",
    },
    {
      company_name: "Radhe Jewellers",
      user_id: "USR007",
      open_orders_grams: 1900,
      six_months_order_grams: 13000,
      location: "Surat",
      action: "Edit",
    },
    {
      company_name: "Kishore Solutions",
      user_id: "USR008",
      open_orders_grams: 1400,
      six_months_order_grams: 10500,
      location: "Hyderabad",
      action: "Edit",
    },
    {
      company_name: "Jaya Jewellers Ltd.",
      user_id: "USR009",
      open_orders_grams: 2100,
      six_months_order_grams: 14000,
      location: "Ahmedabad",
      action: "Edit",
    },
    {
      company_name: "Ram Jewellers Pvt. Ltd.",
      user_id: "USR010",
      open_orders_grams: 2000,
      six_months_order_grams: 13000,
      location: "Jaipur",
      action: "Edit",
    },
    {
      company_name: "Narayan Jewellers",
      user_id: "USR011",
      open_orders_grams: 2200,
      six_months_order_grams: 15000,
      location: "Lucknow",
      action: "Edit",
    },
    {
      company_name: "Rahul Traders",
      user_id: "USR012",
      open_orders_grams: 1300,
      six_months_order_grams: 10500,
      location: "Bangalore",
      action: "Edit",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100; // You can change this as needed
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Paginated data
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />

        <div className="flex items-center justify-between  text-[#0e0802] mx-4 py-2">
          <div className="text-[#CC7B25FF] text-base ml-4 ">All (9)</div>
          <button className="flex items-center gap-1.5  transition border-2 border-[#CC7B25FF] px-2 py-1 rounded-md text-[#CC7B25FF]">
            <CiExport className="text-lg" />
            <span>Import</span>
          </button>
        </div>
        <div className="Dashboard1 mx-5 mt-2 rounded-sm overflow-hidden">
          <table className="min-w-full border border-neutral-200 border-collapse table-auto px-4">
            <thead className=" text-neutral-600 bg-gray-100">
              <tr className="text-[#CC7B25FF]">
                <th className="py-2 px-4 text-left">Company Name</th>
                <th className="py-2 px-4 text-left">User Id</th>
                <th className="py-2 px-4 text-left">
                  Open Orders <br /> (in grams)
                </th>
                {/* Using a rowspan to break "6 Months Orders" into two lines */}
                <th className="py-2 px-4 text-left" rowSpan="2">
                  6 Months <br /> Orders (in grams)
                </th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Action</th>
                <th className="py-2 px-4 text-left">Edit</th>
                <th></th>
              </tr>
              {/* Adding an extra row to support row span */}
              <tr>{/* This row is empty to support rowspan behavior */}</tr>
            </thead>

            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 text-sm">
                  <td className="py-3 px-4 border-b border-gray-200 font-bold text-neutral-900">
                    {item.company_name}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    {item.user_id}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    {item.open_orders_grams}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    {item.six_months_order_grams}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100 text-neutral-500">
                    {item.location}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    <button className="w-16 h-9 px-3 flex items-center justify-center text-sm font-normal text-[#424856] bg-[#F3D8BC] rounded-lg">
                      Delete
                    </button>
                  </td>

                  <td className="py-3 px-4 border-b border-gray-100">
                    <FaRegEdit className="text-base text-neutral-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Retailers;
