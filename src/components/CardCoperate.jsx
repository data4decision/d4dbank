import React from 'react';

const CardCoperate = ({ darkMode }) => {
  const primaryBg = darkMode ? "bg-[#ffffff]" : "bg-gray-200";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#0b0b5c]";
  const border = darkMode ? "border-[#f47b20]" : "border-[#f47b20]";
   const hover  = darkMode ? 'hover:text-[#0b0b5c]' : 'hover:text-[#f47b20]';
   const BtnTexts = darkMode ? "text-[#ffffff]" : "text-[#ffffff]";

  return (
    <div className={` ${primaryBg} pt-20 pb-20`}>
      <div className={`relative sm:w-[90%] m-auto`}>
        {/* Content Section */}
        <div className="absolute flex flex-col gap-3 sm:px-4 sm:ml-20 px-6 py-15 ">
          <p className={`text-[15px] md:text-[20px] sm:text-[20px] ${BtnTexts}`}>Corporate Credit Card</p>
          <h1 className={`text-[15px] md:text-[35px] sm:text-[30px] font-bold sm:w-[70%]  ${BtnTexts}`}>Higher Efficiencies & Savings</h1>
          <p className={`text-[15px] md:text-[20px] sm:text-[20px] sm:w-[70%] w-[60%] ${BtnTexts}`}>Rationally encounter consequences that are who loves or pursues desire.</p>
          
          {/* Apply Now Button */}
          <a href="#" className="inline-block w-[40%]">
  <button
    className={`
      relative text-[15px] md:text-[15px] sm:text-[20px] font-semibold 
      py-2 px-6 rounded-full border-2 transition-all duration-300 ease-in-out
      ${primaryBg} ${BtnText} ${border} 
      hover:bg-transparent hover:text-[#f47b20]
      hover:shadow-lg hover:scale-105
    `}
  >
    Apply Now
    {/* subtle hover highlight layer */}
    <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition duration-300"></span>
  </button>
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
