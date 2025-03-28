import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { LuUserRound } from "react-icons/lu";
import { IoIosAlert } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

const AddEmployee = () => {
  const [isOn, setIsOn] = useState(false); // Declare the state for the toggle button

  const toggleButton = () => {
    setIsOn((prev) => !prev); // Toggle the state when button is clicked
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />

        <div className=" w-full max-w-3xl mx-6 mt-6">
          <div className="p-6 bg-white shadow-lg">
            <div className="flex gap-2.5 text-xl font-semibold mb-4">
              <IoIosAlert className="mt-1.5 fill-[#CC7B25FF]" />
              <div className="w-full flex items-center justify-between">
                <h1>Generation Information</h1>
                <div className="flex justify-center items-center gap-6">
                  <p className="ml-4 text-xl">{isOn ? "Active" : "Inactive"}</p>
                  <div
                    className={`relative w-10 h-6 cursor-pointer rounded-full transition-colors duration-300 ${
                      isOn ? "bg-amber-500" : "bg-gray-400"
                    }`}
                    onClick={toggleButton}
                  >
                    <div
                      className={`absolute w-6 h-6 bg-white rounded-full top-0 transition-all duration-300 ${
                        isOn ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  Full Name
                  <input
                    type="text"
                    placeholder="Your Full name"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  Location
                  <input
                    type="text"
                    placeholder="Work Location"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  Department
                  <select className="bg-[#F3F4F6FF] p-2 rounded-md w-full">
                    <option>Select Item</option>
                    <option>Select Item</option>
                    <option>Select Item</option>
                  </select>
                </div>
                <div>
                  Role
                  <select className="bg-[#F3F4F6FF] p-2 rounded-md w-full">
                    <option>Role</option>
                  </select>
                </div>
                <div>
                  Phone
                  <input
                    type="text"
                    placeholder="Phone"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  Email
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  DOB
                  <input
                    type="date"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  Gender
                  <div className="flex items-center gap-4">
                    <label>
                      <input type="radio" name="gender" value="male" /> Male
                    </label>
                    <label>
                      <input type="radio" name="gender" value="female" /> Female
                    </label>
                  </div>
                </div>
                <div className="col-span-2">
                  Address
                  <input
                    type="text"
                    placeholder="Address"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" p-6 bg-white shadow-lg my-4">
            <div className="flex justify-between">
              <h3 className="mt-4 font-semibold flex gap-2.5">
                <LuUserRound className="text-[#CC7B25FF] size-5 " />
                Account
              </h3>
              <h3 className="mt-4 font-semibold text-[#CC7B25FF]">Edit</h3>
            </div>

            <div className="flex mt-3.5 flex-col gap-2">
              <div className="flex gap-2 ">
                <div>
                  Email
                  <input
                    type="email"
                    placeholder="example.email@gmail.com"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                    disabled
                  />
                </div>
                <div>
                  Password
                  <input
                    type="password"
                    placeholder="********"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                    disabled
                  />
                </div>
              </div>
              <label className="flex items-center gap-2 mt-3">
                <input type="checkbox" /> Receive monthly product updates
              </label>
              <label className="flex items-center gap-2 mt-2">
                <input type="checkbox" /> See info about people who view my
                profile
              </label>
            </div>
          </div>
          <div className="p-6 bg-white shadow-lg my-4 rounded-[6px] top-[1016px] w-[711px]">
            <div className="flex py-2 items-center gap-4 top-[16px]">
              <TfiMenuAlt className="fill-[#CC7B25FF]" />
              <div className="font-semibold">Permission</div>
            </div>
            <div className=" flex mt-5 left-1 w-2xl h-12 justify-between bg-[#F8F9FAFF]">
              <span>Active</span>
              <span>Active</span>
            </div>
            <div className="flex justify-between items-center border p-2 rounded-md mt-2">
              <label className="flex items-center gap-2"></label>
              <div className="bg-[#F8F9FAFF]  p-2 rounded-md pl-3 pr-8">
                <select className="">
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button className="bg-gray-300 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
