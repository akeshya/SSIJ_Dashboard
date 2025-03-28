import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import img1 from "../../assets/productimage/product2.avif";
import img2 from "../../assets/productimage/product3.jpg";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaTag } from "react-icons/fa6";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const AddProduct = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0); // Initialize stockQuantity state

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new product (like we add new produc)
    console.log("New Product:", { name: productName, price: productPrice });
    setProductName("");
    setProductPrice("");
  };
  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };
  const menuData = [
    {
      subMenu: [],
      title: "Earrings",
    },
    {
      title: "Pendants",
      subMenu: [],
    },
    {
      title: "Earrings",
      subMenu: [],
    },
    {
      title: "Finger Rings",
      subMenu: [
        {
          title: "Stone Rings 1.3",
          subMenu: [
            { title: "Diamond 1.3.1" },
            { title: "Ruby 1.3.2" },
            { title: "Pearl 1.3.3", selected: true },
            { title: "Emerald 1.3.4" },
            { title: "Sapphire 1.3.5" },
            { title: "Opal 1.3.6" },
          ],
        },
      ],
    },
    {
      title: "Pendants",
      subMenu: [],
    },
    {
      title: "Earrings",
      subMenu: [],
    },
    {
      title: "Pendants",
      subMenu: [],
    },
    {
      title: "Finger Rings",
      subMenu: [
        {
          title: "Stone Rings 1.3",
          subMenu: [
            { title: "Diamond 1.3.1" },
            { title: "Ruby 1.3.2" },
            { title: "Pearl 1.3.3", selected: true },
            { title: "Emerald 1.3.4" },
            { title: "Sapphire 1.3.5" },
            { title: "Opal 1.3.6" },
          ],
        },
      ],
    },
  ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="p-6  flex  gap-6">
          <div className=" flex flex-col">
            {/* Page Title */}
            <h1 className="text-2xl font-semibold mb-10">Create New Product</h1>

            <div className="flex items-start justify-between gap-6">
              <div className="max-w-[696px] ">
                <div className="p-4 space-y-4 border border-gray-300 rounded-lg shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33]">
                  <div className="flex w-full">
                    <IoCheckmarkCircleSharp className="mt-0.5 fill-[#1ad85a] " />

                    <select className="w-full">
                      <option className="">General Information</option>
                      <option className="">General Information</option>
                      <option className="">General Information</option>
                    </select>
                  </div>

                  <label className="block text-sm font-medium">
                    Product Title
                  </label>
                  <input
                    className="w-full p-2 bg-[#F3F4F6FF] border-gray-300 rounded-md"
                    placeholder="Enter product title"
                    value="Choker 5005"
                    readOnly
                  />

                  <label className="block text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2  border-gray-300 rounded-md bg-[#F3F4F6FF]"
                    readOnly
                    value="Stone Weight: 6.150\nNet Weight: 39.540"
                  />
                </div>

                {/* Media */}
                <div className="p-4 border border-gray-300 rounded-lg my-4 shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33]">
                  <div className="flex gap-2">
                    <IoCheckmarkCircleSharp className="mt-0.5 fill-[#1ad85a] " />

                    <select className="mb-4 w-full">
                      <option className="block text-sm font-medium">
                        Media
                      </option>
                      <option className="block text-sm font-medium">
                        Media Option 1
                      </option>
                      <option className="block text-sm font-medium">
                        Media Option 2
                      </option>
                      <option className="block text-sm font-medium">
                        Media Option 3
                      </option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    {/* Display images */}
                    <div className="w-24 h-24 border border-gray-200 relative">
                      <img
                        src={img1}
                        alt="Product Image 1"
                        className="w-full h-full object-cover"
                      />
                      <MdDelete className="absolute top-1 right-1 text-red-500 cursor-pointer" />
                    </div>

                    <div className="w-24 h-24 border border-gray-200 relative">
                      <img
                        src={img2}
                        alt="Product Image 2"
                        className="w-full h-full object-cover"
                      />
                      <MdDelete className="absolute top-1 right-1 text-red-500 cursor-pointer" />
                    </div>

                    <div className="w-24 h-24 border-dashed border-2 border-gray-300 flex items-center justify-center">
                      <span className="text-sm text-gray-500">
                        <IoMdAdd />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-4 border border-gray-300 rounded-lg shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33]">
                  <div className="flex gap-2">
                    <IoCheckmarkCircleSharp className="mt-0.5 fill-[#1ad85a] " />

                    <select className="mb-4 w-full">
                      <option className="block text-sm font-medium">
                        Categories
                      </option>
                      <option className="block text-sm font-medium">
                        Category 1
                      </option>
                      <option className="block text-sm font-medium">
                        Category 2
                      </option>
                      <option className="block text-sm font-medium">
                        Category 3
                      </option>
                    </select>
                  </div>

                  {/* Search Input */}
                  <div className="flex  p-2 bg-[#F3F4F6FF] rounded-md gap-1">
                    <CiSearch className="text-gray-500 h-6" />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Search products"
                    />
                  </div>
                  <div className="flex mt-5  rounded-2xl  bg-[#F3F4F6FF] ">
                    <div className="p-4  w-66 border-r border-neutral-300 ">
                      {menuData.map((item) => (
                        <div key={item.title}>
                          <div
                            className={`p-2 cursor-pointer ${
                              item.subMenu.length
                                ? "hover:text-orange-600 font-bold"
                                : ""
                            }`}
                            onClick={() =>
                              item.subMenu.length && toggleMenu(item.title)
                            }
                          >
                            {item.title}
                          </div>
                          {openMenus[item.title] && (
                            <div className="pl-4   border-gray-300">
                              {item.subMenu.map((subItem) => (
                                <div key={subItem.title}>
                                  <div
                                    className={`p-2 cursor-pointer ${
                                      subItem.subMenu
                                        ? "hover:text-orange-600 font-bold"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      subItem.subMenu &&
                                      toggleMenu(subItem.title)
                                    }
                                  >
                                    {subItem.title}
                                  </div>
                                  {openMenus[subItem.title] && (
                                    <div className="pl-4  border-gray-300">
                                      {subItem.subMenu.map((leaf) => (
                                        <div
                                          key={leaf.title}
                                          className={`p-2 cursor-pointer ${
                                            leaf.selected
                                              ? "text-orange-600 font-bold"
                                              : ""
                                          }`}
                                        >
                                          {leaf.title}{" "}
                                          {leaf.selected && (
                                            <span>&#10003;</span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-r border-neutral-300  w-66">
                      {menuData.map((item) => (
                        <div key={item.title}>
                          <div
                            className={`p-2 cursor-pointer ${
                              item.subMenu.length
                                ? "hover:text-orange-600 font-bold"
                                : ""
                            }`}
                            onClick={() =>
                              item.subMenu.length && toggleMenu(item.title)
                            }
                          >
                            {item.title}
                          </div>
                          {openMenus[item.title] && (
                            <div className="pl-4 border-l border-gray-300">
                              {item.subMenu.map((subItem) => (
                                <div key={subItem.title}>
                                  <div
                                    className={`p-2 cursor-pointer ${
                                      subItem.subMenu
                                        ? "hover:text-orange-600 font-bold"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      subItem.subMenu &&
                                      toggleMenu(subItem.title)
                                    }
                                  >
                                    {subItem.title}
                                  </div>
                                  {openMenus[subItem.title] && (
                                    <div className="pl-4 border-l border-gray-300">
                                      {subItem.subMenu.map((leaf) => (
                                        <div
                                          key={leaf.title}
                                          className={`p-2 cursor-pointer ${
                                            leaf.selected
                                              ? "text-orange-600 font-bold"
                                              : ""
                                          }`}
                                        >
                                          {leaf.title}{" "}
                                          {leaf.selected && (
                                            <span>&#10003;</span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-4  w-66">
                      {menuData.map((item) => (
                        <div key={item.title}>
                          <div
                            className={`p-2 cursor-pointer ${
                              item.subMenu.length
                                ? "hover:text-orange-600 font-bold"
                                : ""
                            }`}
                            onClick={() =>
                              item.subMenu.length && toggleMenu(item.title)
                            }
                          >
                            {item.title}
                          </div>
                          {openMenus[item.title] && (
                            <div className="pl-4 border-l border-gray-300">
                              {item.subMenu.map((subItem) => (
                                <div key={subItem.title}>
                                  <div
                                    className={`p-2 cursor-pointer ${
                                      subItem.subMenu
                                        ? "hover:text-orange-600 font-bold"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      subItem.subMenu &&
                                      toggleMenu(subItem.title)
                                    }
                                  >
                                    {subItem.title}
                                  </div>
                                  {openMenus[subItem.title] && (
                                    <div className="pl-4 border-l border-gray-300">
                                      {subItem.subMenu.map((leaf) => (
                                        <div
                                          key={leaf.title}
                                          className={`p-2 cursor-pointer ${
                                            leaf.selected
                                              ? "text-orange-600 font-bold"
                                              : ""
                                          }`}
                                        >
                                          {leaf.title}{" "}
                                          {leaf.selected && (
                                            <span>&#10003;</span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2.5 bg-[#FDF7F2FF] items-center text-center w-[648px] left-[15px] h-[56px] mt-4 p-4">
                    <FaTag className="w-6 h-6 text-[#CC7B25FF]" />
                    <span>Finger Rings / Stone Rings 1.3 / Pearl 1.3.3</span>
                  </div>
                </div>

                {/* Purchase Information */}
                <div className="p-4 border border-gray-300 rounded-lg my-[26px] shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33]">
                  <div className="flex gap-2 mb-4">
                    <IoRadioButtonOffSharp className="mt-1 fill-[#6F7787FF]" />
                    <select className="w-full">
                      <option className="block text-sm font-medium">
                        Purchase Information
                      </option>
                      <option className="block text-sm font-medium">
                        Option 1
                      </option>
                      <option className="block text-sm font-medium">
                        Option 2
                      </option>
                      <option className="block text-sm font-medium">
                        Option 3
                      </option>
                    </select>
                  </div>

                  <div className="p-4 flex gap-6 rounded-lg">
                    <div className="flex-1">
                      {/* Gross Weight Label */}
                      <div className="flex-1">
                        <label className="block text-sm font-medium ">
                          Gross Weight
                        </label>

                        {/* Gross Weight Input */}
                        <input
                          type="text" // or "number" if you prefer numeric input
                          className="w-full p-2  rounded-md bg-[#F3F4F6FF]"
                          placeholder="Enter gross weight"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <label className="block text-sm font-medium">
                        Stock Quantity
                      </label>
                      <select
                        className="w-full p-2 rounded-md bg-[#F3F4F6FF]"
                        value={stockQuantity}
                        onChange={(e) =>
                          setStockQuantity(Number(e.target.value))
                        }
                      >
                        {[...Array(20).keys()].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[216px] w-100 shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33]">
                {/* Publish */}
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <h2 className="text-lg font-bold px-6 pt-6">Publish</h2>
                  <div className="flex items-center justify-between my-[19px] px-6">
                    <p className="text-neutral-500 text-sm font-normal">
                      Status
                    </p>
                    <span className="bg-[#EEFCFFFF] text-[#007A8FFF] text-xs py-1.5 px-2 rounded-[14px]">
                      Draft
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-6">
                    <p>Publish</p>
                    <span>----</span>
                  </div>
                  <div className="flex flex-col gap-4 mt-4 mb-8 px-6">
                    <button className="bg-neutral-200 text-neutral-600 font-normal text-sm rounded-md h-9">
                      Preview
                    </button>
                    <button className="bg-[#FDF7F2FF] text-[#CC7B25FF] font-normal text-sm rounded-md h-9">
                      Save as draft
                    </button>
                  </div>
                  <hr className="border border-neutral-200 mb-4" />
                  <div className="px-6 mb-4">
                    <button className="w-full px-5 py-2 bg-[#CC7B25FF] text-white rounded-md">
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
