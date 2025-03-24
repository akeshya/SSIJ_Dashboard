import React from "react";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const data = [
  {
    company_name: "Mahesh",
    manager: "Bhima",
    order_value: "₹4,66,000",
    order_date: "10/07/2023",
    status: "New",
  },
  {
    company_name: "Titan Hyd",
    manager: "SmoozeShift",
    order_value: "₹4,66,000",
    order_date: "24/07/2023",
    status: "New",
  },
  {
    company_name: "Kalyan Nellore",
    manager: "Prime Time Telecom",
    order_value: "₹4,66,000",
    order_date: "08/08/2023",
    status: "In-progress",
  },
  {
    company_name: "GRT Chennai",
    manager: "OmniTech Corporation",
    order_value: "₹4,66,000",
    order_date: "31/08/2023",
    status: "In-progress",
  },
  {
    company_name: "Mukesh Jewellers",
    manager: "DataStream Inc.",
    order_value: "₹4,66,000",
    order_date: "01/05/2023",
    status: "Completed",
  },
  {
    company_name: "StrideFi",
    manager: "FlowRush",
    order_value: "₹4,66,000",
    order_date: "10/06/2023",
    status: "Completed",
  },
];

const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Orders = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="Dashboard1 p-5">
          <h2 className="text-xl font-bold mb-4">Reports</h2>
          <table className="min-w-full border-collapse table-auto px-4">
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const statusColor =
                  item.status === "New"
                    ? "text-blue-500 bg-blue-100"
                    : item.status === "Completed"
                    ? "text-green-500 bg-green-100"
                    : "text-orange-500 bg-orange-100";

                return (
                  <tr key={index} className="hover:bg-gray-100 text-sm">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 font-bold text-neutral-900 ">
                      {item.company_name}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-100 ">
                      {item.manager}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-100 font-normal ">
                      {item.order_value}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-100 text-neutral-500 ">
                      {item.order_date}
                    </td>
                    <td
                      className={`py-3 px-4 border-b border-gray-100 text-xs`}
                    >
                      <span
                        className={`w-2 px-1.5 py-1 rounded-full ${statusColor}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <FaRegEdit className="text-base text-neutral-600" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Orders;
