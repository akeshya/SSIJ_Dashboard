import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Imgae1 from "../../assets/productimage/photo1.avif";
import Imgae2 from "../../assets/productimage/photo2.jpg";
import Imgae3 from "../../assets/productimage/photo3.png";
import Imgae4 from "../../assets/productimage/photo4.avif";
import Imgae5 from "../../assets/images/background/background-3.jpg";
import { TbMessageDots } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { CiAt } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { MdForwardToInbox } from "react-icons/md";

const RetailerDetails = () => {
  const [Worker, setWorker] = useState("All_orders");

  const handleClick = (status) => {
    setWorker(status);
  };

  const orders = [
    {
      image: Imgae1,
      name: "Non ad Lorem aliq",
      weight: 88,
      quantity: 1,
      totalWeight: "2,992",
      Action: "Cancel",
    },
    {
      image: Imgae2,
      name: "Non esse laboris e",
      weight: 42,
      quantity: 2,
      totalWeight: "4,220",
      Action: "Cancel",
    },
    {
      image: Imgae3,
      name: "Exercitation enim",
      weight: 55,
      quantity: 3,
      totalWeight: "4,993",
      Action: "Cancel",
    },
    {
      image: Imgae4,
      name: "Anim ullamco mag",
      weight: 73,
      quantity: 4,
      totalWeight: "8,548",
      Action: "Delivered",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        {/* Main Content */}
        <div className="flex-1 py-6 pl-6">
          <div className="flex gap-6">
            <div className="  min-w-[376px] h-80 justify-center bg-[#FFFFFFFF] rounded-b-xl ">
              <div className="bg-white pt-3 px-6 pb-6  rounded-lg rounded-b-xl border border-neutral-200">
                <div className="flex justify-center items-center mb-6 h-full">
                  <div className="text-center">
                    <img
                      className="w-35 h-35 rounded-full mb-5 mx-auto"
                      src={Imgae5}
                      alt="Worker"
                    />
                    <div className="">
                      <h3 className="text-lg font-semibold text-[#CC7B25FF]">
                        Kalyan Jewellers
                      </h3>
                      <p className="text-sm font-normal">Nellore</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-3">
                      <div className="w-11 h-11 bg-[#FDF7F2FF] rounded-full flex items-center justify-center hover:text-[#CC7B25FF] hover:bg-[#F8E8D7FF] cursor-pointer">
                        <TbMessageDots className="h-5 w-5 text-[#CC7B25FF]" />
                      </div>
                      <div className="w-11 h-11 bg-[#FDF7F2FF] rounded-full flex items-center justify-center hover:text-[#CC7B25FF] hover:bg-[#F8E8D7FF] cursor-pointer">
                        <MdForwardToInbox className="h-5 w-5 text-[#CC7B25FF]" />
                      </div>
                      <div className="w-11 h-11 bg-[#FDF7F2FF] rounded-full flex items-center justify-center hover:text-[#CC7B25FF] hover:bg-[#F8E8D7FF] cursor-pointer">
                        <IoCallOutline className="h-5 w-5 text-[#CC7B25FF]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 ">
                  <p className="top-80 left-7 mb-4 h-7 font-semibold text-neutral-700">
                    General Info
                  </p>
                  <div className="flex items-center mb-2 justify-between">
                    <div className="flex gap-x-2 ">
                      <FiAlertCircle className="text-[#CC7B25FF] mt-1" />
                      <span className="  font-semibold text-[#6F7787FF]">
                        Status
                      </span>
                    </div>
                    <span className="text-[#117B34FF] bg-[#EEFDF3FF] rounded-[14px] font-normal text-xs px-2 py-1">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center mb-2 justify-between font-normal">
                    <div className="flex mt-2 ">
                      <IoCall className=" text-[#CC7B25FF] " />
                      <div className="mr-2 text-[#CC7B25FF] mt-1 " />
                      <span className="  font-semibold text-[#6F7787FF]">
                        Phone Number
                      </span>
                    </div>
                    <span className="text-[#1091F4FF]">(430) 065-7387</span>
                  </div>
                  <div className="flex items-center mb-2 justify-between font-normal">
                    <div className="flex mt-2">
                      <CiAt className="mr-2 text-[#CC7B25FF] mt-1" />

                      <span className="  font-semibold  text-[#6F7787FF]">
                        Email
                      </span>
                    </div>
                    <span className="text-[#1091F4FF]">main@domain.com</span>
                  </div>
                  <div className="flex items-center justify-between font-normal">
                    <div className="flex mt-2">
                      <FaMapMarkerAlt className="mr-2 text-[#CC7B25FF] mt-1" />
                      <span className="  font-semibold text-[#6F7787FF]">
                        Address
                      </span>
                    </div>
                    North Las Vegas, NV
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center  min-w-[560px] gap-6 ">
              <div className="flex py-3 items-center gap-8 text-neutral-400">
                <h3
                  className={`cursor-pointer ${
                    Worker === "All_orders"
                      ? "text-amber-600 border-b-4 border-amber-600"
                      : ""
                  }`}
                  onClick={() => handleClick("All_orders")}
                >
                  All orders
                </h3>
                <h3
                  className={`cursor-pointer ${
                    Worker === "New_orders"
                      ? "text-amber-600 border-b-4 border-amber-500"
                      : ""
                  }`}
                  onClick={() => handleClick("New_orders")}
                >
                  New orders
                </h3>
                <h3
                  className={`cursor-pointer ${
                    Worker === "Past_Orders"
                      ? "text-amber-600 border-b-4 border-amber-500"
                      : ""
                  }`}
                  onClick={() => handleClick("Past_Orders")}
                >
                  Past orders
                </h3>
                <h3
                  className={`cursor-pointer ${
                    Worker === "Cancelled_orders"
                      ? "text-amber-600 border-b-4 border-amber-500"
                      : ""
                  }`}
                  onClick={() => handleClick("Cancelled_orders")}
                >
                  Cancelled orders
                </h3>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full border   border-gray-300">
                    <thead>
                      <tr className="  ">
                        <th className="text-amber-500 p-2   size-[14px] border border-gray-300">
                          Product Image
                        </th>
                        <th className=" text-amber-500 p-2  size-[14px] border border-gray-300">
                          Product Name
                        </th>
                        <th className="text-amber-500  size-[14px] border border-gray-300">
                          Weight(in grams)
                        </th>
                        <th className="text-amber-500 p-2  size-[14px] border border-gray-300">
                          Quantity
                        </th>
                        <th className="p-2 border  size-[14px] border-gray-300">
                          Total Weight (grams)
                        </th>
                        <th className="p-2 border  size-[14px] border-gray-300">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index} className="text-center">
                          <td className="p-2 border border-gray-300">
                            <img
                              src={order.image}
                              alt="Product"
                              className="w-10 h-10 mx-auto"
                            />
                          </td>
                          <td className="p-2 border border-gray-300">
                            {order.name}
                          </td>
                          <td className="p-2 border border-gray-300">
                            {order.weight}
                          </td>
                          <td className="p-2 border border-gray-300">
                            {order.quantity}
                          </td>
                          <td className="p-2 border border-gray-300">
                            {order.totalWeight}
                          </td>
                          <td className="p-2 border border-gray-300">
                            <span
                              className={`px-2  py-2 rounded-md text-[#424856FF] text-sm ${
                                order.Action === "Delivered"
                                  ? "bg-[#CC7B25FF] text-[#FFFFFFFF] hover:bg-[#A1621EFF] disabled:opacity-15"
                                  : "bg-[#F3D8BCFF]"
                              }`}
                            >
                              {order.Action}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerDetails;
