import React from "react";
import { IoIosArrowUp } from "react-icons/io"; // Importing the Up Arrow Icon for growth rate

// OverviewCard component accepts props from parent component
// Props include: text, number, growthrate, icon, and bgColor
const OverviewCard = ({ text, number, growthrate, icon, bgColor }) => {
  return (
    <div
      // Main card container with dynamic background color and shadow effect
      className={`flex justify-between rounded-md card-shadow p-5`}
      style={{ backgroundColor: `#${bgColor}` }} // Dynamic background color applied via inline styling
    >
      <div className="flex flex-col gap-2">
        {/* Displaying the text that describes the order category */}
        <span className="text-[16px] font-bold">{text} orders</span>

        <div>
          {/* Displaying the number */}
          <span className="text-[32px]">{number}</span>
        </div>

        <div className="flex items-center gap-1">
          {/* Growth rate arrow icon */}
          <IoIosArrowUp className="text-[#117B4FFF]" />

          <span className="text-sm font-normal">
            {/* Displaying the growth rate */}
            <span className="text-[#117B4FFF] text-sm">{growthrate}</span> from
            last month
          </span>
        </div>
      </div>

      {/* Icon section with a border and centered icon */}
      <div className="border border-blue-400 h-7 w-7 flex items-center justify-center">
        <span className="text-xl">{icon}</span>
      </div>
    </div>
  );
};

// Exporting the component for use in other parts of the application
export default OverviewCard;
