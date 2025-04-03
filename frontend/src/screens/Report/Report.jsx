import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { PiKeyboardBold } from "react-icons/pi";
import { BiDownArrow } from "react-icons/bi";

const Reports = () => {
  return (
    <div className="flex h-screen gap-8 ">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <div className="w-full">
          {/* Reports Section */}
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15">
            {/* Quick Create Receipt Section */}
            <div className="bg-orange-100  p-4 items-center  rounded-md">
              <div className=" flex gap-5 border-white  ">
                <div>
                  <h3 className="font-bold  text-lg">Quick Create Receipt</h3>
                </div>

                <div class="mb-2 text-[14px] h-[36px] px-[9px] text-[#007A8F] flex items-center justify-center rounded-[18px] bg-[#EEFCFF] border-transparent hover:bg-[#6AE9FF] hover:text-[#007A8F] active:bg-[#00A8C5] disabled:bg-[#EEFCFF]   disabled:text-[#007A8F]">
                  #123456789
                </div>
              </div>
              <div class=" border-t-2 w-full border-[#F3F4F6]"></div>
              <div className="flex gap-2.5 py-3 p-2">
                <PiKeyboardBold className="mt-1" />
                <p className="text-[#323743FF] font-semibold ">General info</p>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-semibold">
                  Receipt Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-white cursor-not-allowed"
                  required
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Issue
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Payment
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 bg-white border rounded-md"
                  />
                </div>
              </div>
              <div className="mt-5 w-full ">
                <label className="block text-sm font-semibold">Note</label>
                <textarea
                  className="w-full bg-white p-4  border rounded-md"
                  placeholder="Note..."
                />
              </div>
              <div className="flex justify-end items-end text-[#CC7B25FF] bg-[#00000000]">
                <select className=" p-2 flex items-center justify-center mt-1">
                  <option>Show additional information</option>
                  <option>Show additional information</option>
                </select>
              </div>
              <div class=" border-t-2  mt-6.5 w-full border-[#F3F4F6]"></div>

              <div className="mt-3 flex  justify-between">
                <div className="flex items-center justify-center font-normal  text-base p-2.5 text-[#CC7B25FF] bg-[#FDF7F2FF]  border rounded-b-md hover:text-[#CC7B25FF] hover:bg-[#F3D8BCFF] ">
                  Go into install
                </div>
                <div className="flex gap-2.5">
                  <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                  <button className="bg-orange-500 text-white p-2 rounded-md">
                    Create
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-orange-100  p-4 items-center  rounded-md ">
              <div className=" flex gap-5 border-white  ">
                <div>
                  <h3 className="font-bold  text-lg">Way Bill </h3>
                </div>

                <div class="mb-2 text-[14px] h-[36px] px-[9px] text-[#007A8F] flex items-center justify-center rounded-[18px] bg-[#EEFCFF] border-transparent hover:bg-[#6AE9FF] hover:text-[#007A8F] active:bg-[#00A8C5] disabled:bg-[#EEFCFF]   disabled:text-[#007A8F]">
                  #123456789
                </div>
              </div>
              <div class=" border-t-2 w-full border-[#F3F4F6]"></div>
              <div className="flex gap-2.5 py-3 p-2">
                <PiKeyboardBold className="mt-1" />
                <p className="text-[#323743FF] font-semibold ">General info</p>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-semibold">
                  Receipt Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-white cursor-not-allowed"
                  required
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Issue
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Payment
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 bg-white border rounded-md"
                  />
                </div>
              </div>
              <div className="mt-5 w-full ">
                <label className="block text-sm font-semibold">Note</label>
                <textarea
                  className="w-full bg-white p-4  border rounded-md"
                  placeholder="Note..."
                />
              </div>
              <div className="flex justify-end items-end text-[#CC7B25FF] bg-[#00000000]">
                <select className=" p-2 flex items-center justify-center mt-1">
                  <option>Show additional information</option>
                  <option>Show additional information</option>
                </select>
              </div>
              <div class=" border-t-2  mt-6.5 w-full border-[#F3F4F6]"></div>

              <div className="mt-3 flex  justify-between">
                <div className="flex items-center justify-center font-normal  text-base p-2.5 text-[#CC7B25FF] bg-[#FDF7F2FF]  border rounded-b-md hover:text-[#CC7B25FF] hover:bg-[#F3D8BCFF] ">
                  Go into install
                </div>
                <div className="flex gap-2.5">
                  <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                  <button className="bg-orange-500 text-white p-2 rounded-md">
                    Create
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-orange-100  p-4 items-center  rounded-md ">
              <div className=" flex gap-5 border-white  ">
                <div>
                  <h3 className="font-bold  text-lg">Shipping Label</h3>
                </div>

                <div class="mb-2 text-[14px] h-[36px] px-[9px] text-[#007A8F] flex items-center justify-center rounded-[18px] bg-[#EEFCFF] border-transparent hover:bg-[#6AE9FF] hover:text-[#007A8F] active:bg-[#00A8C5] disabled:bg-[#EEFCFF]   disabled:text-[#007A8F]">
                  #123456789
                </div>
              </div>
              <div class=" border-t-2 w-full border-[#F3F4F6]"></div>
              <div className="flex gap-2.5 py-3 p-2">
                <PiKeyboardBold className="mt-1" />
                <p className="text-[#323743FF] font-semibold ">General info</p>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-semibold">
                  Receipt Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-white cursor-not-allowed"
                  required
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Issue
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Payment
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 bg-white border rounded-md"
                  />
                </div>
              </div>
              <div className="mt-5 w-full ">
                <label className="block text-sm font-semibold">Note</label>
                <textarea
                  className="w-full bg-white p-4  border rounded-md"
                  placeholder="Note..."
                />
              </div>
              <div className="flex justify-end items-end text-[#CC7B25FF] bg-[#00000000]">
                <select className=" p-2 flex items-center justify-center mt-1">
                  <option>Show additional information</option>
                  <option>Show additional information</option>
                </select>
              </div>
              <div class=" border-t-2  mt-6.5 w-full border-[#F3F4F6]"></div>

              <div className="mt-3 flex  justify-between">
                <div className="flex items-center justify-center font-normal  text-base p-2.5 text-[#CC7B25FF] bg-[#FDF7F2FF]  border rounded-b-md hover:text-[#CC7B25FF] hover:bg-[#F3D8BCFF] ">
                  Go into install
                </div>
                <div className="flex gap-2.5">
                  <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                  <button className="bg-orange-500 text-white p-2 rounded-md">
                    Create
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-orange-100  p-4 items-center  rounded-md ">
              <div className=" flex gap-5 border-white  ">
                <div>
                  <h3 className="font-bold  text-lg">Barcode</h3>
                </div>

                <div class="mb-2 text-[14px] h-[36px] px-[9px] text-[#007A8F] flex items-center justify-center rounded-[18px] bg-[#EEFCFF] border-transparent hover:bg-[#6AE9FF] hover:text-[#007A8F] active:bg-[#00A8C5] disabled:bg-[#EEFCFF]   disabled:text-[#007A8F]">
                  #123456789
                </div>
              </div>
              <div class=" border-t-2 w-full border-[#F3F4F6]"></div>
              <div className="flex gap-2.5 py-3 p-2">
                <PiKeyboardBold className="mt-1" />
                <p className="text-[#323743FF] font-semibold ">General info</p>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-semibold">
                  Receipt Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-white cursor-not-allowed"
                  required
                />
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Issue
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border bg-white rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block  text-sm font-semibold">
                    Date Payment
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 bg-white border rounded-md"
                  />
                </div>
              </div>
              <div className="mt-5 w-full ">
                <label className="block text-sm font-semibold">Note</label>
                <textarea
                  className="w-full bg-white p-4  border rounded-md"
                  placeholder="Note..."
                />
              </div>
              <div className="flex justify-end items-end text-[#CC7B25FF] bg-[#00000000]">
                <select className=" p-2 flex items-center justify-center mt-1">
                  <option>Show additional information</option>
                  <option>Show additional information</option>
                </select>
              </div>
              <div class=" border-t-2  mt-6.5 w-full border-[#F3F4F6]"></div>

              <div className="mt-3 flex  justify-between">
                <div className="flex items-center justify-center font-normal  text-base p-2.5 text-[#CC7B25FF] bg-[#FDF7F2FF]  border rounded-b-md hover:text-[#CC7B25FF] hover:bg-[#F3D8BCFF] ">
                  Go into install
                </div>
                <div className="flex gap-2.5">
                  <button className="bg-gray-300 p-2 rounded-md">Cancel</button>
                  <button className="bg-orange-500 text-white p-2 rounded-md">
                    Create
                  </button>
                </div>
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
