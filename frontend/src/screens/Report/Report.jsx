import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Reports = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <div className="w-full">
          {/* Reports Section */}
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {/* Quick Create Receipt Section */}
            <div className="bg-orange-100  p-4  items-center  rounded-md shadow-md">
              <div className="border-b-2 border-white  ">
                <h3 className="font-bold  text-lg">Quick Create Receipt</h3>
                <line className=""></line>
              </div>

              <div className="mt-3">
                <label className="block font-semibold">Receipt Number</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-white cursor-not-allowed"
                  required
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block font-semibold">Date Issue</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold">Date Payment</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block font-semibold">Note</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter notes here..."
                />
              </div>
              <div className="mt-3 flex justify-between">
                <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                <button className="bg-orange-500 text-white p-2 rounded-md">
                  Create
                </button>
              </div>
            </div>
            <div className="bg-orange-100 p-5 rounded-md shadow-md">
              <h3 className="font-bold text-lg">Quick Create Receipt</h3>
              <div className="mt-3">
                <label className="block font-semibold">Receipt Number</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-200 cursor-not-allowed"
                  value="123456789"
                  readOnly
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block font-semibold">Date Issue</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold">Date Payment</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block font-semibold">Note</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter notes here..."
                />
              </div>
              <div className="mt-3 flex justify-between">
                <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                <button className="bg-orange-500 text-white p-2 rounded-md">
                  Create
                </button>
              </div>
            </div>
            <div className="bg-orange-100 p-5 rounded-md shadow-md">
              <h3 className="font-bold text-lg">Quick Create Receipt</h3>
              <div className="mt-3">
                <label className="block font-semibold">Receipt Number</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-200 cursor-not-allowed"
                  value="123456789"
                  readOnly
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block font-semibold">Date Issue</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold">Date Payment</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block font-semibold">Note</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter notes here..."
                />
              </div>
              <div className="mt-3 flex justify-between">
                <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                <button className="bg-orange-500 text-white p-2 rounded-md">
                  Create
                </button>
              </div>
            </div>
            <div className="bg-orange-100 p-5 rounded-md shadow-md">
              <h3 className="font-bold text-lg">Quick Create Receipt</h3>
              <div className="mt-3">
                <label className="block font-semibold">Receipt Number</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-200 cursor-not-allowed"
                  value="123456789"
                  readOnly
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block font-semibold">Date Issue</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold">Date Payment</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
              </div>
              <div className="mt-3">
                <label className="block font-semibold">Note</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter notes here..."
                />
              </div>
              <div className="mt-3 flex justify-between">
                <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                <button className="bg-orange-500 text-white p-2 rounded-md">
                  Create
                </button>
              </div>
            </div>

            {/* Way Bill Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
