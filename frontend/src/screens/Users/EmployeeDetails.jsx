import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import image1 from "../../assets/images/profiles/profile-3.png";
import { BsBoxArrowUp } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";

const EmployeeDetails = () => {
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
  const [generalActive, setGeneralActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="flex w-full">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Header />

        <div className="mt-4 p-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="w-full">
              <div className="border border-gray-300 rounded-sm pb-8 w-full">
                <label className="flex items-center py-4 px-6 text-sm font-medium text-gray-700 border-b border-gray-300">
                  <HiOutlinePhotograph className="w-5 h-5 text-[#CC7B25FF] mr-2" />
                  Photo
                </label>
                <div className="flex items-center space-x-4 px-6 pt-6 mb-8">
                  <img
                    src={image1}
                    alt="Avatar"
                    className="h-16 w-16 rounded-full"
                  />
                  <button className="bg-[#FDF7F2FF] text-[#CC7B25FF] text-sm px-3 py-1.5 rounded-md hover:bg-[#F8E8D7FF] transition-all duration-300">
                    Change
                  </button>
                  <button className="text-[#CC7B25FF] text-sm px-3 py-1.5 rounded-md hover:bg-[#F8E8D7FF]">
                    Remove
                  </button>
                </div>
                <div className="bg-[#FDF7F280] border-2 border-dashed border-orange-300 rounded-lg py-10 px-6 text-center flex flex-col items-center text-orange-500 mx-6">
                  <BsBoxArrowUp />
                  <p className="text-gray-500">Drag & drop your files here</p>
                  <p className="text-gray-500">OR</p>
                  <button className="mt-2 bg-[#CC7B25FF] text-white px-4 py-2 rounded-lg hover:bg-[#B66E21FF]">
                    Browse files
                  </button>
                </div>
              </div>

              <div className="p-6 mt-6 rounded-sm border border-gray-300">
                <div className="flex items-center gap-3">
                  <RiAdminFill className="fill-[#CC7B25FF] w-6 h-6" />
                  <h2 className="text-lg font-semibold text-gray-800">
                    Connect
                  </h2>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  {renderToggleButton(
                    <div className="flex items-center gap-2">
                      <span className="w-9 h-9 bg-[#FEF1F1FF] flex items-center justify-center rounded-full">
                        <FaGoogle className="w-4 h-4 fill-[#C71610FF]" />
                      </span>
                      <span>Google</span>
                    </div>,
                    googleConnected,
                    setGoogleConnected
                  )}
                  {renderToggleButton(
                    <div className="flex items-center gap-2">
                      <span className="w-9 h-9 bg-[#E5FFEEFF] flex items-center justify-center rounded-full">
                        <FaWhatsappSquare className="fill-[#28AF55FF] w-4 h-4" />
                      </span>
                      <span>WhatsApp</span>
                    </div>,
                    whatsappConnected,
                    setWhatsappConnected
                  )}
                  {renderToggleButton(
                    <div className="flex items-center gap-2 hover:bg-[#F8E8D7FF] ">
                      <span className="w-9 h-9 bg-[#F4F5F6FF] flex items-center justify-center rounded-full">
                        <FaInstagram className="fill-[#565D6DFF] w-4 h-4" />
                      </span>
                      <span>Instagram</span>
                    </div>,
                    instagramConnected,
                    setInstagramConnected
                  )}
                </div>
              </div>
            </div>
            {/* Right Side: Form Fields */}
            <div className="rounded border-gray-300 border px-8 pt-5 flex-1 w-full">
              <div className="flex justify-between">
                <div className="flex items-center  gap-3 ">
                  <IoIosInformationCircle className="fill-[#CC7B25FF] font-se h-5.5 w-5.5" />
                  <h3 className="text-lg font-semibold bg-[#FFFFFFFF] text-gray-800 ">
                    General Information
                  </h3>
                </div>
                <div className="flex items-center  gap-1">
                  <h3 className="text-lg font-semibold bg-[#FFFFFFFF] text-gray-800 ">
                    Active
                  </h3>
                  {renderToggleButton(
                    <div className="flex items-center gap-2"></div>,
                    generalActive,
                    setGeneralActive
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
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
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
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
                        className="form-radio text-orange-500"
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
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="mt-1 w-full bg-[#F3F4F6FF] rounded-lg px-3 "
                ></textarea>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-[#CC7B25FF] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#B66E21FF] transition duration-300">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
