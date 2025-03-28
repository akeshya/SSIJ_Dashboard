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
import { BsChevronBarExpand } from "react-icons/bs";
import { LuClock8 } from "react-icons/lu";

const Sidebar = () => {
  // Get selected state and setSelected function from HeaderContext
  const { selected, setSelected } = useContext(HeaderContext);

  // Local state to handle dropdown menu open/close for Products, Reports, Orders, and Users
  const [menuOpenState, setMenuOpenState] = useState({
    isProduct: false,
    isReportOpen: false,
    isOrder: false,
    isUsers: false,
    isCategories: false,
    isNotification: false,
  });

  // Function to handle selection of a menu item
  const handleClick = (status) => {
    setSelected(status); // Update the selected section
  };

  // Function to toggle the dropdown menu state (for Products, Reports, Orders, or Users)
  const toggleMenuState = (selectedState) => {
    setMenuOpenState((prev) => ({
      ...prev,
      [selectedState]: !prev[selectedState], // Toggle the selected dropdown state
    }));
  };

  return (
    <div className="min-w-[290px] sidebar-shadow min-h-screen">
      {/* Logo and Title */}
      <div className="flex items-center gap-[16px] relative pl-[15px] pt-[12px]">
        <img src={logo} alt="" className="w-[43px] h-[48px] rounded-[6px]" />
        <span className="text-[24px] font-[700]">Shree South India</span>
      </div>

      {/* Dashboard Menu Item */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "dashboard" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => handleClick("dashboard")} // Set Dashboard as selected on click
      >
        <RxDashboard />
        <Link to="/">Dashboard</Link>
      </div>

      {/* Orders Menu Item with dropdown */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "isOrder" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isOrder")} // Toggle Orders dropdown on click
      >
        <HiNumberedList size={24} />
        <span>Orders</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isOrder ? "" : "9+"}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>

      {/* Dropdown for Order List */}
      {menuOpenState.isOrder && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "Orders" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("Orders");
            }} // Set Orders as selected
          >
            <HiNumberedList />
            <Link to={"/orders"}>Order List</Link>
          </div>
        </div>
      )}

      {/* Reports Menu Item with dropdown */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "Reports" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isReportOpen")} // Toggle Reports dropdown
      >
        <FaFileAlt size={24} />
        <span>Reports</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isReportOpen ? "" : "9+"}
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
            <FaFileAlt />
            <Link to="/Reports/Reports-list">Report List</Link>
          </div>
        </div>
      )}

      {/* Products Menu Item with dropdown */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "products" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isProduct")} // Toggle Products dropdown
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
            <BsChevronBarExpand style={{ transform: "rotate(480deg)" }} />
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
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => handleClick("")} // Set AddProduct as selected
          >
            <BsChevronBarExpand style={{ transform: "rotate(480deg)" }} />
            <Link to="">Draft</Link>
          </div>
        </div>
      )}

      {/* Users Menu Item with dropdown */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "Users" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isUsers")} // Toggle Users dropdown
      >
        <PiUsersDuotone />
        <span>Users</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isUsers ? "" : "9+"}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>
      {menuOpenState.isUsers && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "retailers" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("retailers");
            }} // Set Retailers as selected
          >
            <PiUsersDuotone />
            <Link to={"/retailers"}>Retailers</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "employees" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("employees");
            }} // Set Employees as selected
          >
            <PiUsersDuotone />
            <Link to={"/employees"}>Employees</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "workers" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("workers");
            }} // Set Workers as selected
          >
            <PiUsersDuotone />
            <Link to={"/workers"}>Workers</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "vendors" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("vendors");
            }} // Set Vendors as selected
          >
            <PiUsersDuotone />
            <Link to={"/vendors"}>Vendors</Link>
          </div>
        </div>
      )}

      {/* Categories Menu Item */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "Categories" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isCategories")} // Toggle Users dropdown
      >
        <MdOutlineCalendarViewWeek style={{ transform: "rotate(89deg)" }} />
        <span>Categories</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isCategories ? "" : "9+"}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>
      {menuOpenState.isCategories && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer $
          {
            selected ==="Categorie-list"?"text-amber-500 bg-[#edcda4]":
          }`}
            onClick={() => {
              handleClick("Categorie-list");
            }} //set Categorie-list is selected
          >
            <LuClock8 />
            <Link to={"/categorie-list"}>Categorie-list</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer $
          {
            selected ==="Categorie-list"?"text-amber-500 bg-[#edcda4]":
          }`}
            onClick={() => {
              handleClick("Categorie-list");
            }} //set Categorie-list is selected
          >
            <LuClock8 />
            <Link to={"/categorie-list"}>Add New Categorie</Link>
          </div>
        </div>
      )}
      {/* Notifications Menu Item */}
      <div
        className={`flex items-center gap-2 px-6 py-2 mt-4 rounded-xl cursor-pointer ${
          selected === "notifications" ? "text-amber-500 bg-[#edcda4]" : ""
        }`}
        onClick={() => toggleMenuState("isNotification")} // Set Notifications as selected
      >
        <LuMessageSquareMore />
        <span>Notifications</span>
        <button className="ml-auto text-orange-600">
          {menuOpenState.isNotification ? "" : "9+"}
          {/* Show notification count if dropdown is closed */}
        </button>
      </div>
      {menuOpenState.isNotification && (
        <div className="pl-6 mt-2">
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "notification" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              toggleMenuState("isNotification");
            }}
          >
            <PiUsersDuotone />
            <Link to={"/Createnotification"}>Create Notification</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "pastNotification"
                ? "text-amber-500 bg-[#edcda4]"
                : ""
            }`}
            onClick={() => {
              handleClick("pastNotification");
            }} // Set Workers as selected
          >
            <PiUsersDuotone />
            <Link to={"/pastNotification"}>Past Notification</Link>
          </div>
          <div
            className={`flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer ${
              selected === "draft" ? "text-amber-500 bg-[#edcda4]" : ""
            }`}
            onClick={() => {
              handleClick("draft");
            }} // Set Vendors as selected
          >
            <PiUsersDuotone />
            <Link to={"/draft"}>Draft</Link>
          </div>
        </div>
      )}
      {/* Settings Menu Item */}
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
