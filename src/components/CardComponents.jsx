import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Right Arrow Icon
import { FaDatabase } from 'react-icons/fa'; // Example Icon for Savings & CDs

const CardComponent = () => {
  const [rangeValue, setRangeValue] = useState(30); // initial value for the range

  // Handle hover to change range value
  const handleHover = () => setRangeValue(100); // Set range to full on hover
  const handleLeave = () => setRangeValue(30); // Reset range when hover ends

  return (
    <div
      className="relative w-full max-w-xs bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-yellow-500 rounded-full">
          <FaDatabase size={20} className="text-white" /> {/* Icon */}
        </div>
        <div>
          <h3 className="font-semibold text-xl">Savings & CDs</h3>
        </div>
        <div className="ml-auto">
          {/* Arrow Icon */}
          <FaArrowRight size={20} className="text-gray-400 hover:text-[#f47b20] transition-colors duration-300" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-500 rounded-full mb-2">
        <div
          className="h-full bg-red-600 rounded-full"
          style={{ width: `${rangeValue}%` }}
        ></div>
      </div>

      {/* Description */}
      <p className="text-sm mb-2">
        Take trivial example which of us ever all undertakes laborious.
      </p>
      <p className="text-sm text-gray-400">* Interest rate up to 5% p.a</p>
    </div>
  );
};

export default CardComponent;
