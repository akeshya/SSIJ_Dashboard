import React, { useContext, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa6";
import profileImg from "../assets/images/users/user-1.jpg";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../Contexts/HeaderContext.jsx";
// Header component
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibi....
  const { selectedStatus } = useContext(HeaderContext);

  // Toggle the dropdown menu when profile is clicke....
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between h-[72px] header-shadow px-4">
        <span className="text-2xl font-[700] text-[#cc7b25ff]">
          {selectedStatus}
        </span>
        {/* Shows Dashboard*/}
        <div className="flex items-center justify-center gap-4">
          <div className="flex relative">
            {/* Search input box */}
            <input
              type="input"
              placeholder="Search..."
              className="w-[322px] bg-[#f3eee7] py-1 pl-8 rounded-md placeholder-[#9b6217] placeholder:font-medium"
            />
            <CiSearch className="absolute top-2 left-2 text-[#9b6217]" />
          </div>
          <div>
            <IoNotifications className="text-[#CC7B25FF]" />
          </div>
          <div>
            <GoQuestion className="text-[#CC7B25FF]" />
          </div>
          <div className="flex items-center gap-1">
            <img
              src={profileImg}
              alt="Profile"
              className="w-[36px] rounded-full cursor-pointer"
              onClick={toggleDropdown} // Toggle the dropdown when clicked
            />
            <span>Ankit Jain</span>
            <FaCaretDown
              onClick={toggleDropdown}
              className="cursor-pointer text-[#CC7B25FF]"
            />
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-40 w-[150px] bg-white shadow-md rounded-md">
                <ul className="text-gray-800">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      navigate("");
                    }}
                  >
                    My Account
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      navigate("/SignUp"); //Link to sign Up we are add new account
                    }}
                  >
                    Add Account
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      navigate("/SignIn"); //we are already account we login
                    }}
                  >
                    Login
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
