import React from 'react';

const CardCoperate = ({ darkMode }) => {
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#0b0b5c]";
  const border = darkMode ? "border-[#f47b20]" : "border-[#f47b20]";

  return (
    <div>
      <div className="relative sm:w-[90%] m-auto">
        {/* Content Section */}
        <div className="absolute flex flex-col gap-3 sm:px-4 ml-20 mt-10">
          <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${BtnText}`}>Corporate Credit Card</p>
          <h1 className={`text-[15px] md:text-[35px] sm:text-[30px] font-bold w-[70%] ${BtnText}`}>Higher Efficiencies & Savings</h1>
          <p className={`text-[15px] md:text-[20px] sm:text-[20px] w-[70%] ${BtnText}`}>Rationally encounter consequences that are who loves or pursues desire.</p>
          
          {/* Apply Now Button */}
          <a href="" className="relative inline-block w-[20%] group">
            <button className={`text-[15px] md:text-[15px] sm:text-[20px] font-semibold py-2 px-6 ${border} ${primaryBg} ${BtnText} rounded-full border-2 border-transparent group-hover:border-[#0b0b5c] transition duration-300 ease-in-out`}>
              Apply Now
            </button>
            {/* Hover effect on button */}
            <span className={`absolute inset-0 ${primarysBg} opacity-0 group-hover:opacity-30 transform translate-x-full group-hover:translate-x-0 transition-opacity duration-500 ease-out rounded-full`} />
          </a>
        </div>

        {/* Image Section */}
        <div>
          <img src="/coperat.png" alt="Corporate Credit Card" className="w-full h-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default CardCoperate;
