import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import image1 from "../../assets/banner_Images/image1.jpg";
import image7 from "../../assets/banner_Images/image7.png";
import image3 from "../../assets/banner_Images/image3.png";
import image4 from "../../assets/banner_Images/image4.jpg";
import image5 from "../../assets/banner_Images/image5.jpg";
import image6 from "../../assets/banner_Images/image6.jpg";
import image9 from "../../assets/banner_Images/image9.jpg";
import { FaRegEdit } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { BsFunnel } from "react-icons/bs";

const products = [
  {
    image: image1,
    name: "Yellow Choker Set",
    weight: 389,
    quantity: 10,
    category: "Set",
    id: 116000,
  },
  {
    image: image3,
    name: "Mermaid Top",
    weight: 186,
    quantity: 12,
    category: "Tops",
    id: 444000,
  },
  {
    image: image4,
    name: "Summer Bag",
    weight: 557,
    quantity: 20,
    category: "Handbag",
    id: 385000,
  },
  {
    image: image5,
    name: "Silver Love Like A Butterfly Set",
    weight: 101,
    quantity: 16,
    category: "Jackets",
    id: 773000,
  },
  {
    image: image6,
    name: "Silver Love Like A Butterfly Set",
    weight: 754,
    quantity: 18,
    category: "Trousers",
    id: 304000,
  },
  {
    image: image7,
    name: "Sunny Sweater",
    weight: 920,
    quantity: 25,
    category: "Tops",
    id: 860000,
  },
  {
    image: image9,
    name: "Linen chain",
    weight: 924,
    quantity: 20,
    category: "Tops",
    id: 827000,
  },
];

const ProductList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Header />

        <div className="flex justify-between  items-center pl-15   gap-2.5 mt-4">
          <div className="flex gap-2 border-2 border-gray-300 rounded-2xl h-[46px] w-[137px] items-center justify-center">
            <h2 className="text-xl  font-bold ">Newest</h2>
            <BsFunnel className="mt-1.5 text-[#CC7B25FF]" />
          </div>
          <div className="flex text-[#CC7B25FF] justify-between gap-6 mb-3">
            <div className="flex text-[#0e0802] justify-between gap-6">
              <button className="flex items-center gap-1.5  transition">
                <CiExport className="text-lg" />
                <span>Export</span>
              </button>
            </div>
            <div className="flex text-[#0e0802] justify-between gap-6">
              <button className="flex items-center gap-1.5  transition">
                <CiImport className="text-lg" />
                <span>Import</span>
              </button>
            </div>
            <div className="flex text-[#CC7B25] justify-between gap-6">
              <button className="flex items-center text-white gap-1.5 border bg-[#CC7B25FF] border-amber-300 rounded-[6px] px-4 py-2 font-bold  hover:bg-amber-300 transition">
                <MdAdd />
                <Link to={"/add-product"}>Add product</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="">
                <th className="p-2">Product</th>
                <th className="p-2">Name</th>
                <th className="p-2">Weight (In grams)</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Category</th>
                <th className="p-2">Product ID</th>
                <th className="p-2 ">Icon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="">
                  <td className="p-2 rou">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-14 rounded-md"
                    />
                  </td>
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.weight}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-lg">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-2">{product.id}</td>
                  <td className="p-2 ">
                    {<FaRegEdit className="fill-[#CC7B25FF]" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductList;
