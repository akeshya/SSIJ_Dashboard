import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const ProductList = () => {
  // Sample data; in a real application, this would come from a database or API
  const products = [
    { id: 1, name: "Product 1", price: "$100" },
    { id: 2, name: "Product 2", price: "$200" },
    { id: 3, name: "Product 3", price: "$300" },
  ];

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
      <h2 className="text-2xl mb-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between py-2 border-b">
            <span>{product.name}</span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default ProductList;
