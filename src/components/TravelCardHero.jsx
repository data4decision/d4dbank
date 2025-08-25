import React from 'react'

const TravelCardHero = ({ darkMode }) => {
  const bgClass = darkMode ? "bg-[#0b0b5c]" : "bg-[#ffffff]";
  const textClass = darkMode ? "text-[#ffb366]" : "text-[#0b0b5c]";
  const borderClass = darkMode ? "border-t-4 border-[#ffb366]" : "border-t-4 border-[#0b0b5c]";

  return (
    <div className="relative w-full flex justify-center opacity-100 items-center pt-7 pb-7">
      <img
        src="/ourAll.jpg"
        alt="hero"
        className="w-full max-w-7xl h-[180px] sm:h-[250px] md:h-[400px] object-cover rounded-lg grayscale-95"
      />
      <span
        className={`
          absolute left-[15px] sm:left-[35px] top-[160px] sm:top-[280px]
          -translate-x-1 -translate-y-2
          ${bgClass} ${borderClass} ${textClass}
          block px-3 py-2 sm:px-4 sm:py-4 font-semibold text-center
          text-lg sm:text-2xl md:text-4xl
          rounded-lg shadow-lg w-[80vw] max-w-[250px] sm:max-w-[320px]
        `}
      >
        Travel & Hotel
      </span>
    </div>
  );
};

export default TravelCardHero;
