import React, { useState } from "react";
import { FaFilter, FaPlus } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import imgae1 from "../../assets/productimage/image1.avif";
import imgae2 from "../../assets/productimage/image2.jpeg";
import imgae3 from "../../assets/productimage/image3.png";
import imgae4 from "../../assets/productimage/item4.jpg";
import imgae5 from "../../assets/productimage/image5.jpeg";
import imgae6 from "../../assets/productimage/product2.avif";
import imgae7 from "../../assets/productimage/item4.jpg";
import imgae8 from "../../assets/banner_Images/image9.jpg";
import { CiExport, CiImport } from "react-icons/ci";
import Pagination from "../../components/Pagination";

const NotificationList = () => {
  const [selected, setSelected] = useState("All Notification");

  const handleClick = (status) => {
    setSelected(status);
  };
  const products = [
    {
      id: 1,
      image: imgae1,
      name: "Yellow Sweater Set",
      status: "Active",
      category: "Set",
      stock: "15 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 2,
      image: imgae2,
      name: "Mermaid Top",
      status: "Active",
      category: "Tops",
      stock: "8 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 3,
      image: imgae3,
      name: "Summer Bag",
      status: "Active",
      category: "Handbag",
      stock: "25 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 4,
      image: imgae4,
      name: "teenu dop",
      status: "Active",
      category: "Tops",
      stock: "8 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 5,
      image: imgae5,
      name: "Merical Bag",
      status: "Active",
      category: "Handbag",
      stock: "25 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 6,
      image: imgae6,
      name: "Hot Bag",
      status: "Active",
      category: "Handbag",
      stock: "25 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 7,
      image: imgae7,
      name: "Nickey dop",
      status: "Active",
      category: "Tops",
      stock: "8 in stock for 2 variants",
      vendor: "S.laz Store",
    },
    {
      id: 8,
      image: imgae8,
      name: "Dj Bag",
      status: "Active",
      category: "Handbag",
      stock: "25 in stock for 2 variants",
      vendor: "S.laz Store",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="flex flex-col w-full">
          <div className="p-3 ">
            <div className="flex p-3 justify-between space-x-4 mb-1 w-full ">
              <div className="flex items-center gap-2.5 ">
                <h2
                  className={`cursor-pointer ${
                    selected === "All Notification"
                      ? "text-amber-500 border-b-2 border-amber-500"
                      : ""
                  }`}
                  onClick={() => handleClick("All Notification")}
                >
                  All Notification
                </h2>
              </div>

              <div className="flex items-center space-x-2 gap-5.5">
                <div className="flex text-[#0e0802] gap-9">
                  <div className="flex text-[#0e0802]">
                    <button className="flex items-center gap-1.5  ">
                      <CiExport className="text-lg" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-2 rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-200 border border-gray-200 text-gray-600 uppercase text-sm">
                    <th className="p-4">
                      <input type="checkbox" />
                    </th>
                    <th className="p-4">Product</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">Vendor</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4  bg-white checked:bg-[#ff6a72] focus:ring-0">
                        <input type="checkbox" className="" />
                      </td>
                      <td className="p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded"
                        />
                      </td>
                      <td className="p-4">{product.name}</td>
                      <td className="p-4">
                        <span className="  bg-[#EEFCFFFF]  border-transparent hover:bg-[#6AE9FFFF] text-[#007A8FFF] px-2 py-1 rounded-full text-xs">
                          {product.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="p-4">{product.stock}</td>
                      <td className="p-4">{product.vendor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default NotificationList;
