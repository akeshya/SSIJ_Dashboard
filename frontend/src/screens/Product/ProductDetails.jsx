import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import image1 from "../../assets/banner_Images/image1.jpg";
import image2 from "../../assets/banner_Images/image4.jpg";
import image3 from "../../assets/banner_Images/image5.jpg";
import image4 from "../../assets/banner_Images/image6.jpg";

const ProductDetails = () => {
  return (
    <div className="flex">
      {/* Sidebar component rendered here */}
      <Sidebar />
      <div className="w-screen ">
        {/* Header component rendered here */}
        <Header />
        <div className="p-4 px-8">
          <div className="flex justify-between items-center mb-4 mt-5">
            <div>
              <nav className="text-sm text-[#CC7B25FF] flex space-x-2">
                <span>Arm Wear</span> <span>&gt;</span>
                <span>Bangles</span> <span>&gt;</span>
                <span className="text-[#CC7B25FF] ">Choker</span>
              </nav>
            </div>
            <div className="">
              <button className="px-3 py-2 bg-[#CC7B25FF] text-white text-sm font-normal rounded-lg cursor-pointer  hover:bg-[#B66E21FF] transition-all duration-300">
                Edit Product
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-20 mt-4">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className=" rounded-b-md ">
                <img src={image1} alt="Product" className="w-70 h-68" />
              </div>
              <div className="pl-10 flex gap-6 items-center justify-center">
                <img
                  src={image2}
                  alt="Product"
                  className="w-25 h-[125px] rounded-md"
                />
                <img
                  src={image3}
                  alt="Product"
                  className="w-25 h-[125px] rounded-md"
                />
                <img
                  src={image4}
                  alt="Product"
                  className="w-25 h-[125px] rounded-md"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 w-[575px] ">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-[#CC7B25FF] ">
                  Choker
                </h2>
                <span className="text-[#CC7B25FF] ">Available in stock</span>
              </div>

              <p className="text-[#000000FF] w-4/6 text-xs pl-3 mt-4">
                Get a little lift from these Sam Edelman sandals featuring
                ruched straps and leather lace-up ties, while a braided jute
                sole makes a fresh statement for summer.
              </p>
              <div className=" justify-between mt-4">
                <h3 className="mt-4 font-semibold text-[#CC7B25FF] mb-4">
                  Size
                </h3>
                <div className="flex gap-2 items-center justify-between">
                  <table className="mt-2 w-full  text-left">
                    <thead>
                      <tr className=" ">
                        <th className="p-2 border border-gray-200 ">Size</th>
                        <th className="p-2 border border-gray-200">
                          Item Weight (grams)
                        </th>
                        <th className="p-2 border border-gray-200">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-gray-200">
                        <td className="p-2 border border-gray-200">94</td>
                        <td className="p-2 border border-gray-200">979</td>
                        <td className="p-2 border border-gray-200">85</td>
                      </tr>
                      <tr className="border border-gray-200">
                        <td className="p-2 border border-gray-200">56</td>
                        <td className="p-2 border border-gray-200">419</td>
                        <td className="p-2 border border-gray-200">41</td>
                      </tr>
                      <tr className="border border-gray-200">
                        <td className="p-2 border border-gray-200">41</td>
                        <td className="p-2 border border-gray-200">428</td>
                        <td className="p-2 border border-gray-200">4</td>
                      </tr>
                      <tr className="border border-gray-200">
                        <td className="p-2 border border-gray-200">73</td>
                        <td className="p-2 border border-gray-200">787</td>
                        <td className="p-2 border border-gray-200">62</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
