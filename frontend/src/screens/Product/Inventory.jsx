import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Inventory = () => {
  const inventory = [
    { id: 1, name: "Product 1", stock: 10 },
    { id: 2, name: "Product 2", stock: 5 },
    { id: 3, name: "Product 3", stock: 20 },
  ];

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <h2 className="text-2xl mb-4">Inventory</h2>
          <ul>
            {inventory.map((item) => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span>{item.name}</span>
                <span>{item.stock} in stock</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
