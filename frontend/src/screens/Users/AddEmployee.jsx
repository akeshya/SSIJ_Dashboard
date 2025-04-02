import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { IoIosAlert } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoPerson } from "react-icons/io5";

const AddEmployee = () => {
  const [isOn, setIsOn] = useState(false); // Declare the state for the toggle button
  const [generalActive, setGeneralActive] = useState(false);

  const toggleButton = () => {
    setIsOn((prev) => !prev); // Toggle the state when button is clicked
  };
  const renderToggleButton = (label, state, setState) => (
    <div
      key={label}
      className="flex items-center justify-between p-3 rounded-lg"
    >
      <span className="text-gray-700 font-medium">{label}</span>
      <button
        onClick={() => setState(!state)}
        className={`w-12 h-6 flex items-center rounded-full cursor-pointer p-1 transition duration-300 ${
          state ? "bg-[#CC7B25FF]" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-4 w-4 bg-white rounded-full transform transition duration-300 ${
            state ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </button>
    </div>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />

        <div className=" w-full max-w-3xl mx-6 mt-6">
          <div className="p-6 bg-white border border-gray-300">
            <div className="flex gap-2.5 text-xl font-semibold mb-4 ">
              <IoIosAlert className="mt-1.5 fill-[#CC7B25FF]" />
              <div className="w-full flex items-center justify-between ">
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
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400"
                  />
                </div>
                <div>
                  Location
                  <input
                    type="text"
                    placeholder="Work Location"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400"
                  />
                </div>
                <div>
                  Department
                  <select className="bg-[#F3F4F6FF] p-2 rounded-md w-full ">
                    <option>Select Item</option>
                    <option>Select Item</option>
                    <option>Select Item</option>
                  </select>
                </div>
                <div>
                  Role
                  <select className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400">
                    <option>Role</option>
                  </select>
                </div>
                <div>
                  Phone
                  <input
                    type="text"
                    placeholder="Phone"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400"
                  />
                </div>
                <div>
                  Email
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400"
                  />
                </div>
                <div>
                  DOB
                  <input
                    type="date"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400"
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
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white border border-gray-300 my-4 ">
            <div className="flex justify-between border-b border-gray-300  p-4   ">
              <h3 className="mt-4 font-semibold flex gap-2.5">
                <IoPerson className="text-[#CC7B25FF] size-5 fill-[#CC7B25FF]" />
                Account
              </h3>
              <h3 className="mt-4 font-semibold text-[#CC7B25FF]">Edit</h3>
            </div>

            <div className="flex mt-3.5 flex-col gap-2 p-5  ">
              <div className="flex gap-2 ">
                <div>
                  Email
                  <input
                    type="email"
                    placeholder="example.email@gmail.com"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
                <div>
                  Password
                  <input
                    type="password"
                    placeholder="********"
                    className="bg-[#F3F4F6FF] p-2 rounded-md w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col  ">
                <label className="items-center  p-2 ">
                  <input type="checkbox" className="accent-amber-400 " />
                  <input type="checkbox" class="peer hidden " />
                  See info about people who view my profile
                  <span className="text-[10px]  ">
                    <br />
                    <p className="pl-5">
                      Quis nostrud exercitation ullamco laboris nisi ut
                    </p>
                  </span>
                </label>
                <label className="items-center p-2">
                  <input type="checkbox" className="accent-amber-400" />{" "}
                  <input type="checkbox" class="peer hidden" />
                  See info about people who view my profile
                  <span className="text-[10px]   ">
                    <br />
                    <p className="pl-5">
                      Quis nostrud exercitation ullamco laboris nisi ut
                    </p>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-300  rounded-[6px] top-[1016px] w-[711px]">
            <div className="flex py-2 items-center border-b  border-gray-300 gap-4 top-[16px]">
              <TfiMenuAlt className="fill-[#CC7B25FF]" />
              <div className="font-semibold">Permission</div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className=" flex p-2 font-semibold justify-center gap-130 items-center border border-gray-100 bg-[#F8F9FAFF]">
                <span>Active</span>
                <span>Action</span>
              </div>
              <div className="flex justify-between items-center border border-gray-100 p-2 rounded-md mt-2">
                <div>
                  {renderToggleButton(
                    <div className="flex items-center gap-2"></div>,
                    generalActive,
                    setGeneralActive
                  )}
                </div>
                <label className="flex items-center gap-2"></label>
                <div className="bg-[#F8F9FAFF] flex gap-2.5 p-2 rounded-md pl-3 pr-8">
                  <select className="">
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
