import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new product (this is just a mock-up; in a real app, you'd send this to a server or state)
    console.log("New Product:", { name: productName, price: productPrice });
    setProductName("");
    setProductPrice("");
  };

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <h2 className="text-2xl mb-4">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="productName" className="block text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="productPrice" className="block text-gray-700">
                Product Price
              </label>
              <input
                type="text"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
