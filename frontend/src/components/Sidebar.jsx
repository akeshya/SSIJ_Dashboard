import React, { useContext, useState } from "react";
import logo from "../assets/images/logo.png";
import { RxDashboard } from "react-icons/rx";
import { HiNumberedList } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { PiUsersDuotone } from "react-icons/pi";
import { MdOutlineCalendarViewWeek } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeaderContext } from "../Contexts/HeaderContext";

const Sidebar = () => {
  //  selected state and setSelected function from HeaderContext
  const { selected, setSelected } = useContext(HeaderContext);

  // Local state to handle dropdown menu open/close for All and Reports
  const [menuOpenState, setMenuOpenState] = useState({
    isProduct: false,
    isReportOpen: false,
    isOrder: false,
  });

  const handleClick = (status) => {
    setSelected(status); // Update the selected section
  };

  // Function to toggle the dropdown menu state (Products or Reports)
  const toggleMenuState = (selectedState) => {
    setMenuOpenState((prev) => ({
      ...prev,
      [selectedState]: !prev[selectedState], // selected dropdown state
    }));
  };

  return (
    <div className="min-w-[290px] sidebar-shadow min-h-screen">
      <div className="flex items-center gap-[16px] relative pl-[15px] pt-[12px]">
        <img src={logo} alt="" className="w-[43px] h-[48px] rounded-[6px]" />
        <span className="text-[24px] font-[700]">Shree South India</span>
      </div>
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "dashboard" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => handleClick("dashboard")} // Set Dashboard as selected on click
      >
        <RxDashboard />
        <Link to="/">Dashboard</Link>
      </div>

      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "orders" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isOrder")} // Toggle Report dropdown on click
      >
        <HiNumberedList size={24} />
        <span>Orders</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isOrder ? "" : ""}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>

      {/* Dropdown for Order List */}
      {menuOpenState.isOrder && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "OrderDetails" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("OrderDetails");
            }} // Set Orders as selected
          >
            <HiNumberedList />
            <Link to={"/order-details"}>Order List</Link>
          </div>
        </div>
      )}

      {/* Reports Link with dropdown toggle */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "Reports" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isReportOpen")} // Toggle Report dropdown
      >
        <FaFileAlt size={24} />
        <span to={"/reports"}>Reports</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isReportOpen ? "" : "9+"}{" "}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>

      {/* Dropdown for Report List */}
      {menuOpenState.isReportOpen && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "ReportList" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => handleClick("ReportList")} // Set ReportList as selected
          >
            <HiNumberedList />
            <Link to="/Reports/Reports-list">Report List</Link>
          </div>
        </div>
      )}

      {/* Products Link with dropdown toggle */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "products" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isProduct")} // Toggle Product dropdown
      >
        <AiFillProduct size={24} />
        <span className="ml-2">Products</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isProduct ? "" : "9+"}{" "}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>

      {/* Dropdown for Product List, Inventory, and Add Product */}
      {menuOpenState.isProduct && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "productList" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => handleClick("productList")} // Set ProductList as selected
          >
            <HiNumberedList />
            <Link to="/product-list">Product List</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "inventory" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => handleClick("inventory")} // Set Inventory as selected
          >
            <MdOutlineCalendarViewWeek />
            <Link to="/inventory">Inventory</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "addProduct" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => handleClick("addProduct")} // Set AddProduct as selected
          >
            <AiFillProduct />
            <Link to="/add-product">Add Product</Link>
          </div>
        </div>
      )}

      {/* Users Link */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "users" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => handleClick("users")} // Set Users as selected
      >
        <PiUsersDuotone />
        <Link to="/users">Users</Link>
      </div>

      {/* Categories Link */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "Categories" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => handleClick("Categories")} // Set Categories as selected
      >
        <MdOutlineCalendarViewWeek style={{ transform: "rotate(89deg)" }} />
        <Link to="/categories">Categories</Link>
      </div>

      {/* Notifications Link */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "notifications" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => handleClick("notifications")} // Set Notifications as selected
      >
        <LuMessageSquareMore />
        <Link to="/Notifications">Notifications</Link>
      </div>

      {/* Settings Link */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "settings" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => handleClick("settings")} // Set Settings as selected
      >
        <IoSettings />
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;
