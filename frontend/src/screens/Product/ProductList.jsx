import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiImport, CiExport } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsFunnel } from "react-icons/bs";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Pagination from "../../components/Pagination";
import image1 from "../../assets/banner_Images/image1.jpg";
import image3 from "../../assets/banner_Images/image3.png";
import image4 from "../../assets/banner_Images/image4.jpg";
import image5 from "../../assets/banner_Images/image5.jpg";
import image6 from "../../assets/banner_Images/image6.jpg";
import image7 from "../../assets/banner_Images/image7.png";
import image9 from "../../assets/banner_Images/image9.jpg";

// Array holding product details
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
    name: "Linen Chain",
    weight: 924,
    quantity: 20,
    category: "Tops",
    id: 827000,
  },
];

// ProductList component
const ProductList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="p-6 flex gap-6">
          <div className="w-full flex flex-col">
            {/* Filter and Action Buttons */}
            <div className="flex justify-between items-center gap-2.5 mt-4">
              <div className="flex gap-2  border-2 border-gray-300 rounded-2xl h-[46px] w-[137px] items-center justify-center">
                <h2 className="text-xl  font-bold">Newest</h2>
                <BsFunnel className="mt-1.5 text-[#CC7B25FF]" />
              </div>
              <div className="flex text-[#CC7B25FF] gap-6">
                <button className="flex items-center gap-1.5 text-[#0e0802] transition">
                  <CiExport className="text-lg" />
                  <span>Export</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#0e0802] transition">
                  <CiImport className="text-lg" />
                  <span>Import</span>
                </button>
                <button className="flex items-center gap-1.5 text-white bg-[#CC7B25FF] border border-amber-300 rounded-[6px] px-4 py-2 font-bold hover:bg-amber-300 transition">
                  <MdAdd />
                  <Link to="/add-product">Add Product</Link>
                </button>
              </div>
            </div>

            {/* Product Table */}
            <div className="mt-6 w-full bg-white p-4 rounded-lg shadow-md">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F5F5] text-[#565D6DFF] font-bold">
                    <th className="p-2">Product</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Weight (In grams)</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Product ID</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td className="p-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-14 rounded-md"
                        />
                      </td>
                      <td className="p-2">
                        <Link to="/product-details">{product.name}</Link>
                      </td>
                      <td className="p-2">{product.weight}</td>
                      <td className="p-2">{product.quantity}</td>
                      <td className="p-2">
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-lg">
                          {product.category}
                        </span>
                      </td>
                      <td className="p-2">{product.id}</td>
                      <td className="p-2">
                        <FaRegEdit className="fill-[#CC7B25FF]" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
