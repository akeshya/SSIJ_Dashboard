import React from "react";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "./Pagination"; // Import the Pagination component
import { GrNotes } from "react-icons/gr";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";

// Static data representing orders for now (mock data)
const data = [
  {
    company_name: "Ravi",
    manager: "Bhima",
    order_value: "₹4,66,000",
    order_date: "10/07/2023",
    status: "New",
  },
  {
    company_name: "jiya ",
    manager: "SmoozeShift",
    order_value: "₹4,66,000",
    order_date: "24/07/2023",
    status: "New",
  },
  {
    company_name: "Deendayal Nellore",
    manager: "Prime Time Telecom",
    order_value: "₹4,66,000",
    order_date: "08/08/2023",
    status: "In-progress",
  },
  {
    company_name: "Vishnu Chennai",
    manager: "OmniTech Corporation",
    order_value: "₹4,66,000",
    order_date: "31/08/2023",
    status: "In-progress",
  },
  {
    company_name: "Kanu Jewellers",
    manager: "DataStream Inc.",
    order_value: "₹4,66,000",
    order_date: "01/05/2023",
    status: "Completed",
  },
  {
    company_name: "bhim",
    manager: "FlowRush",
    order_value: "₹4,66,000",
    order_date: "10/06/2023",
    status: "Completed",
  },
];

// Page numbers for pagination (static for now)
const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const OverviewTable = () => {
  return (
    <div className="Dashboard1 p-5">
      {/* Header Section with Report Title and Import/Export buttons */}
      <div className="flex justify-between gap-2.5">
        <div className="flex gap-2">
          {/* Icon and title for the report */}
          <GrNotes className="mt-1.5 text-[#CC7B25FF]" />
          <h2 className="text-xl mt-0 font-bold mb-4">Detailed Report</h2>
        </div>
        <div className="flex text-[#CC7B25FF] justify-between gap-6 mb-3">
          {/* Import Button */}
          <div className="flex text-[#CC7B25] justify-between gap-6">
            <button className="flex items-center gap-1.5 border border-amber-300 rounded-2xl px-4 py-2 font-bold text-[#CC7B25] hover:bg-amber-100 transition">
              <CiImport className="text-lg" />
              <span>Import</span>
            </button>
          </div>
          {/* Export Button */}
          <div className="flex text-[#CC7B25] justify-between gap-6">
            <button className="flex items-center gap-1.5 border border-amber-300 rounded-2xl px-4 py-2 font-bold text-[#CC7B25] hover:bg-amber-100 transition">
              <CiExport className="text-lg" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table for displaying the order data */}
      <table className="min-w-full border-collapse table-auto px-4">
        {/* Table Header with column names */}
        <thead className="text-neutral-600 bg-gray-100">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th className="py-2 px-4 text-left" scope="col">
              Company Name
            </th>
            <th className="py-2 px-4 text-left" scope="col">
              Manager
            </th>
            <th className="py-2 px-4 text-left" scope="col">
              Order Value
            </th>
            <th className="py-2 px-4 text-left" scope="col">
              Order Date
            </th>
            <th className="py-2 px-4 text-left" scope="col">
              Status
            </th>
            <th></th> {/* Empty cell for action buttons */}
          </tr>
        </thead>

        {/* Table Body with dynamic data rows */}
        <tbody>
          {data.map((item, index) => {
            // Dynamically set status color based on order status
            const statusColor =
              item.status === "New"
                ? "text-blue-500 bg-blue-100"
                : item.status === "Completed"
                ? "text-green-500 bg-green-100"
                : "text-orange-500 bg-orange-100";

            return (
              <tr key={index} className="hover:bg-gray-100 text-sm">
                {/* Checkbox for each row */}
                <td>
                  <input type="checkbox" />
                </td>
                {/* Company Name */}
                <td className="py-3 px-4 border-b border-gray-200 font-bold text-neutral-900 ">
                  {item.company_name}
                </td>
                {/* Manager Name */}
                <td className="py-3 px-4 border-b border-gray-100 ">
                  {item.manager}
                </td>
                {/* Order Value */}
                <td className="py-3 px-4 border-b border-gray-100 font-normal ">
                  {item.order_value}
                </td>
                {/* Order Date */}
                <td className="py-3 px-4 border-b border-gray-100 text-neutral-500 ">
                  {item.order_date}
                </td>
                {/* Status with dynamic color */}
                <td className={`py-3 px-4 border-b border-gray-100 text-xs`}>
                  <span
                    className={`w-2 px-1.5 py-1 rounded-full ${statusColor}`}
                  >
                    {item.status}
                  </span>
                </td>
                {/* Edit Icon */}
                <td>
                  <FaRegEdit className="text-base text-neutral-600" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination />
    </div>
  );
};

export default OverviewTable;
