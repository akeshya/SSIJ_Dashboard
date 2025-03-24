import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const OverviewCard = ({ text, number, growthrate, icon, bgColor }) => { // props coming from OverViewTable.jsx
  return (
    <div
      className={`flex justify-between rounded-md card-shadow p-5 ]`}
      style={{ backgroundColor: `#${bgColor}` }}
    >
      <div className="flex flex-col gap-2">
        <span className="text-[16px] font-bold">{text} orders</span>
        <div>
          <span className="text-[32px]">{number}</span>
        </div>
        <div className="flex items-center gap-1">
          <IoIosArrowUp className="text-[#117B4FFF]" />
          <span className="text-sm font-normal">
            <span className="text-[#117B4FFF] text-sm">{growthrate}</span> from
            last month
          </span>
        </div>
      </div>
      <div className="border border-blue-400 h-7 w-7 flex items-center justify-center">
        <span className="text-xl">{icon}</span>
      </div>
    </div>
  );
};

export default OverviewCard;
