import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import image1 from "../../assets/images/profiles/profile-1.png";
import { BsBoxArrowUp } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";

const AddVendor = () => {
  const [isActive, setIsActive] = useState(true);
  const [gender, setGender] = useState("Male");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    location: "",
    gender: "Male",
    address: "",
  });
  const [googleConnected, setGoogleConnected] = useState(true);
  const [whatsappConnected, setWhatsappConnected] = useState(false);
  const [instagramConnected, setInstagramConnected] = useState(false);

  return (
    <div className="flex w-full">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Header />

        <div className="bg-white mt-4 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              General information
            </h3>
            <div className="flex items-center">
              <span className="mr-2">Active</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => setIsActive(!isActive)}
                  className="sr-only peer"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Left Side: Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo
              </label>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={image1}
                  alt="Avatar"
                  className="h-10 w-10 rounded-b-4xl  "
                />
                {/* Replace with avatar image */}
                <button className="text-orange-500">Change</button>
                <button className="text-orange-500">Remove</button>
              </div>
              <div className="border-2  border-dashed border-orange-300 rounded-lg p-6 text-center flex flex-col items-center text-orange-500">
                <BsBoxArrowUp />
                <p className="text-gray-500">Drag & drop your files here</p>
                <p className="text-gray-500">OR</p>
                <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg">
                  Browse files
                </button>
              </div>
              <div className="p-6 mt-3.5 rounded-b-sm shadow-md max-w-md mx-auto ">
                <div className="flex gap-3  ">
                  <RiAdminFill className="mt-1.5  fill-[#CC7B25FF]" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Connect
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      label: "Google",
                      state: googleConnected,
                      setState: setGoogleConnected,
                    },
                    {
                      label: "WhatsApp",
                      state: whatsappConnected,
                      setState: setWhatsappConnected,
                    },
                    {
                      label: "Instagram",
                      state: instagramConnected,
                      setState: setInstagramConnected,
                    },
                  ].map(({ label, state, setState }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-3  rounded-lg shadow-sm "
                    >
                      <span className="text-gray-700 font-medium">{label}</span>
                      <button
                        onClick={() => setState(!state)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${
                          state ? "bg-[#CC7B25FF]" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`h-4 w-4 bg-white rounded-full shadow-md transform transition duration-300 ${
                            state ? "translate-x-6" : "translate-x-0"
                          }`}
                        ></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Form Fields */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                General information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-1 block w-full bg-[#F3F4F6FF] rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Work location"
                    className="mt-1 block w-full bg-[#F3F4F6FF] rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="mt-1 block w-full bg-[#F3F4F6FF] rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 block w-full bg-[#F3F4F6FF] rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    DOB
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="mt-1 block w-full bg-[#F3F4F6FF] rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <div className="flex items-center space-x-4 mt-1">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={() => setGender("Male")}
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={() => setGender("Female")}
                        className="form-radio text-orange-500 "
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  placeholder="Address"
                  className="mt-1  w-full bg-[#F3F4F6FF] rounded-lg px-3 py-2"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendor;
