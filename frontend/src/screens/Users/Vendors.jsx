import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiExport } from "react-icons/ci";
import Pagination from "../../components/Pagination";

export const Vendors = () => {
  const data = [
    {
      name: "Elite Enterprises", // Updated Vendor Name
      user_id: "USR001",
      phone_number: "(123) 456-7890",
      location: "Mumbai",
      status: "Active",
      action: "Edit",
    },
    {
      name: "TechShift Solutions", // Updated Vendor Name
      user_id: "USR002",
      phone_number: "(234) 567-8901",
      location: "Delhi",
      status: "Inactive",
      action: "Edit",
    },
    {
      name: "Precious Jewels Co.", // Updated Vendor Name
      user_id: "USR003",
      phone_number: "(345) 678-9012",
      location: "Kolkata",
      status: "Active",
      action: "Edit",
    },
    {
      name: "ElectroServe", // Updated Vendor Name
      user_id: "USR004",
      phone_number: "(456) 789-0123",
      location: "Chennai",
      status: "Inactive",
      action: "Edit",
    },
    {
      name: "Nellore Traders", // Updated Vendor Name
      user_id: "USR005",
      phone_number: "(567) 890-1234",
      location: "Nellore",
      status: "Active",
      action: "Edit",
    },
    {
      name: "Chennai Electronics", // Updated Vendor Name
      user_id: "USR006",
      phone_number: "(678) 901-2345",
      location: "Chennai",
      status: "Active",
      action: "Edit",
    },
    {
      name: "Gemstone Traders", // Updated Vendor Name
      user_id: "USR007",
      phone_number: "(789) 012-3456",
      location: "Surat",
      status: "Inactive",
      action: "Edit",
    },
    {
      name: "Kishore Tech Solutions", // Updated Vendor Name
      user_id: "USR008",
      phone_number: "(890) 123-4567",
      location: "Hyderabad",
      status: "Active",
      action: "Edit",
    },
    {
      name: "Jewelers Hub", // Updated Vendor Name
      user_id: "USR009",
      phone_number: "(901) 234-5678",
      location: "Ahmedabad",
      status: "Active",
      action: "Edit",
    },
    {
      name: "Ram Traders Pvt. Ltd.", // Updated Vendor Name
      user_id: "USR010",
      phone_number: "(012) 345-6789",
      location: "Jaipur",
      status: "Active",
      action: "Edit",
    },
    {
      name: "Narayan Jewelers", // Updated Vendor Name
      user_id: "USR011",
      phone_number: "(123) 456-7890",
      location: "Lucknow",
      status: "Active",
      action: "Edit",
    },
    {
      name: "Rahul Jewelers", // Updated Vendor Name
      user_id: "USR012",
      phone_number: "(234) 567-8901",
      location: "Bangalore",
      status: "In Active",
      action: "Edit",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // You can change this as needed
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Paginated data
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [selected, setSelected] = useState("orders");

  const handleClick = (status) => {
    setSelected(status);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />

        <div className="flex items-center justify-between text-[#0e0802] px-4 py-2">
          <div className="flex  gap-2.5 text-neutral-400">
            <h2
              className={`mb-5 cursor-pointer ${
                selected === "orders"
                  ? "text-amber-500 border-b border-amber-500"
                  : ""
              }`}
              onClick={() => handleClick("orders")}
            >
              All Vendor
            </h2>
            <h2
              className={`mb-5 cursor-pointer ${
                selected === "Active"
                  ? "text-amber-500 border-b border-amber-5 00"
                  : ""
              }`}
              onClick={() => handleClick("Active")}
            >
              Active
            </h2>
            <h2
              className={`mb-5 cursor-pointer ${
                selected === "new"
                  ? "text-amber-500 border-b border-amber-500"
                  : ""
              }`}
              onClick={() => handleClick("new")}
            >
              In Active
            </h2>
          </div>
          <button className="flex items-center  gap-1.5 transition border-2 border-[#CC7B25FF] px-2 py-1 rounded-md text-[#CC7B25FF]">
            <CiExport className="text-lg" />
            <span>Import</span>
          </button>
        </div>
        <div className="Dashboard1 p-5">
          <table className="min-w-full mt-[-20px] border-collapse table-auto px-4">
            <thead className="text-neutral-600 bg-gray-100">
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th className="py-2 px-4 text-left">Vendor Name</th>
                <th className="py-2 px-4 text-left">User ID</th>
                <th className="py-2 px-4 text-left">Phone Number</th>
                <th className="py-2 px-4 text-left">Location</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left"></th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 text-sm">
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td className="py-3 px-4 border-b border-gray-200 font-bold text-neutral-900">
                    {item.name}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200">
                    {item.user_id}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    {item.phone_number}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100 text-neutral-500">
                    {item.location}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-100 text-neutral-500">
                    <span
                      className="px-2 py-1 rounded text-white text-xs"
                      style={{
                        background:
                          item.status === "Active"
                            ? "green"
                            : item.status === "In Active"
                            ? ""
                            : "red",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-3 px-4 border-b border-gray-100">
                    <BsThreeDotsVertical className="text-base text-neutral-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Vendors;
