import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { IoMdRadioButtonOff } from "react-icons/io";
import { IoIosOptions } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import image1 from "../../assets/productimage/item1.jpg";
import image2 from "../../assets/productimage/item2.jpg";
import image3 from "../../assets/productimage/item3.jpg";

const OrderDetails = () => {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />
      <div className="w-screen">
        {/* Header Component */}
        <Header />
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4"></div>

            {/* Order Information */}
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm">STATUS</p>
                <span className="bg-orange-500 text-white px-2 py-1 rounded">
                  SHIPPED
                </span>
              </div>
              <div>
                <p className="text-sm">CREATED AT</p>
                <p className="font-semibold">May 30, 2019 at 2:52 PM</p>
              </div>
              <div>
                <p className="text-sm">ORDER NUMBER</p>
                <p className="font-semibold">ORD190079</p>
              </div>
              <div>
                <p className="text-sm">TOTAL WEIGHT</p>
                <p className="font-semibold">1794.00 Gms</p>
              </div>
            </div>

            {/* Order Details Section */}
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-1.5">
              <div>
                <span>Order Details:#987</span>
              </div>
              <div className="flex gap-3">
                {/* Dropdown and Download Invoice Button */}
                <select
                  name=""
                  id=""
                  className="border-2 rounded-xl min-w-[200px] px-1 border-b-amber-500 outline-0"
                >
                  <option value="">Shipped</option>
                  <option value="">Shipped</option>
                  <option value="">Shipped</option>
                  <option value="">Shipped</option>
                  <option value="">Shipped</option>
                </select>
                <div className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
                  Download Invoice
                </div>
              </div>
            </div>

            {/* Items Summary Table */}
            <div className="flex items-start gap-[38px] justify-between my-2">
              <div className="flex w-full flex-col gap-4">
                <table className="w-full shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33] rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2">Items Summary</th>
                      <th className="p-2">Size</th>
                      <th className="p-2">QTY</th>
                      <th className="p-2">Weight</th>
                      <th className="p-2">Total Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-">
                      <td className="p-2 flex items-center">
                        <img
                          src={image2}
                          alt="Choker"
                          className="w-6 h-6 mr-2"
                        />
                        Choker
                      </td>
                      <td className="p-2">17 Inch</td>
                      <td className="p-2">x5</td>
                      <td className="p-2">198.00</td>
                      <td className="p-2">990.00</td>
                    </tr>
                    <tr className="border-">
                      <td className="p-2 flex items-center">
                        <img
                          src={image1}
                          alt="Choker"
                          className="w-6 h-6 mr-2"
                        />
                        Choker
                      </td>
                      <td className="p-2">21 Inch</td>
                      <td className="p-2">x2</td>
                      <td className="p-2">198.00</td>
                      <td className="p-2">594.00</td>
                    </tr>
                    <tr className="border-">
                      <td className="p-2 flex items-center">
                        <img src={image3} alt="jiya" className="w-6 h-6 mr-2" />
                        Krishna
                      </td>
                      <td className="p-2">21 Inch</td>
                      <td className="p-2">x5</td>
                      <td className="p-2">42.00</td>
                      <td className="p-2">210.00</td>
                    </tr>
                  </tbody>
                </table>

                {/* Total Weight Section */}
                <div className="flex justify-between rounded-xl text-center shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33] h-[52px] items-center px-[90px] py-3">
                  <div>Total Weight</div>
                  <div>1758.00Gm</div>
                </div>

                {/* Attributes Section */}
                <div className="shadow-[0px_8px_17px_#171a1f3B,_0px_0px_2px_#171a1f33] rounded-[6px] items-center text-left px-[10px] bg-[#FFFFFFFF] py-3">
                  <div className="flex gap-3.5">
                    <IoMdRadioButtonOff className="top-6 left-6 w-6 h-6 fill-[#6F7787]" />
                    <div className="top-6 left-15 font-lato text-lg leading-7 font-bold text-[#323743]">
                      Attributes
                    </div>
                    <div className="w-[115px] flex justify-center gap-2 text-amber-500 items-center">
                      <span className="bg-[#FDF7F2FF] rounded-2xl">
                        workers
                      </span>
                      <span className="bg-[#FDF7F2FF] rounded-2xl">Branch</span>
                    </div>
                  </div>

                  {/* Workers Dropdown */}
                  <div className="flex flex-col mt-3">
                    <div className="font-semibold mb-2 ">Workers</div>
                    <select className="bg-gray-100">
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                    </select>
                  </div>

                  {/* Order List with Icons */}
                  <div className="mt-4">
                    <div className="flex gap-4 font-semibold bg-gray-100  ">
                      <span>ORDER</span>
                      <span>VALUE</span>
                    </div>
                    <div className="p-4 justify-between items-center">
                      {/* Order Details with Icon */}
                      <div className="flex gap-5 justify-between mt-3 border  border-gray-100">
                        <div className="flex items-center gap-10">
                          <IoIosOptions />
                          <input
                            type="text"
                            placeholder=""
                            value="Madhu"
                            className="bg-gray-100"
                          />
                        </div>
                        <MdDelete className="fill-[#f22128ff]" />
                      </div>
                      <div className="flex gap-5 justify-between mt-3 border  border-gray-100">
                        <div className="flex items-center gap-10">
                          <IoIosOptions />
                          <input
                            type="text"
                            placeholder=""
                            value="Madhu"
                            className="bg-gray-100"
                          />
                        </div>
                        <MdDelete className="fill-[#f22128ff]" />
                      </div>
                      <div className="flex gap-5 justify-between mt-3 border  border-gray-100">
                        <div className="flex items-center gap-10">
                          <IoIosOptions />
                          <input
                            type="text"
                            placeholder=""
                            value="Madhu"
                            className="bg-gray-100"
                          />
                        </div>
                        <MdDelete className="fill-[#f22128ff]" />
                      </div>
                    </div>
                    <div className="flex  text-amber-500">
                      <IoIosAdd className="mt-1" />
                      Add
                    </div>
                  </div>

                  {/* Branch List */}
                  <div className="mt-4">
                    <div className=" text-lg font-semibold mb-2 ">Branch</div>
                    <select className="w-full bg-gray-100">
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                      <option value="">
                        Selected workers will be notified in Whatsapp.
                      </option>
                    </select>
                    <div className="mt-4">
                      <div className="flex gap-4 justify-between items-center">
                        <div className="flex font-semibold gap-5">
                          <span>ORDER</span>
                          <span>PLACE</span>
                        </div>
                        <span className="pr-40 font-semibold">PERSON</span>
                      </div>
                      <div className="p-4 justify-between items-center w-full">
                        {/* Order Details with Icon */}
                        <div className="flex gap-5 justify-between">
                          <div className="flex items-center gap-10">
                            <IoIosOptions />
                            <input
                              type="text"
                              placeholder=""
                              value="Radhe"
                              className="bg-gray-100"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder=""
                            value="Ram"
                            className="bg-gray-100"
                          />
                          <MdDelete className=" fill-[#f22128ff]" />
                        </div>
                        <div className="flex gap-5 justify-between mt-3">
                          <div className="flex items-center gap-10">
                            <IoIosOptions />
                            <input
                              type="text"
                              placeholder=""
                              value="Krishna"
                              className="bg-gray-100"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder=""
                            value="Vishnu"
                            className="bg-gray-100"
                          />
                          <MdDelete className="fill-[#f22128ff]" />
                        </div>
                        <div className="flex gap-5 justify-between mt-3">
                          <div className="flex items-center gap-10">
                            <IoIosOptions />
                            <input
                              type="text"
                              placeholder=""
                              value="Jiya"
                              className="bg-gray-100 items-center"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder=""
                            value="Siya"
                            className="bg-gray-100"
                          />
                          <MdDelete className="fill-[#f22128ff]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex  text-amber-500">
                    <IoIosAdd className="mt-1" />
                    Add
                  </div>
                </div>

                <div>
                  <button className=" flex bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
                    <IoIosAdd className="mb-0.5 text-2xl" /> Add more Atrributes
                  </button>
                </div>
              </div>

              {/* Shipping and Order Status Section */}
              <div className="flex justify-between min-w-[328px]">
                <div className="w-full flex flex-col gap-7">
                  <div className="rounded-md p-0.5 shadow-[0px_4px_9px_#171a1f30,_0px_0px_2px_#171a1f33]">
                    <h3 className="font-semibold text-white h-9 rounded-sm leading-9 gap-3 mb-2 bg-[#CC7B25FF] text-center">
                      Shipped To
                    </h3>
                    <div className="p-4">
                      <p>Elaine Hernandez</p>
                      <p>P. Panamayan, TX</p>
                      <p>Willoway Wild Sorrey</p>
                      <p>P: (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="rounded-lg p-0.5 shadow-[0px_4px_9px_#171a1f30,_0px_0px_2px_#171a1f33]">
                    <h3 className="font-semibold text-white h-9 rounded-sm leading-9 gap-3 mb-2 bg-[#CC7B25FF] text-center">
                      Order Status
                    </h3>
                    <div className="p-4">
                      <p>Elaine Hernandez</p>
                      <p>P. Panamayan, TX</p>
                      <p>Willoway Wild Sorrey</p>
                      <p>P: (123) 456-7890</p>
                    </div>
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

export default OrderDetails;
