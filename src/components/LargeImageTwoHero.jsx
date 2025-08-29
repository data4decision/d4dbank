import React from 'react'

const LargeImageTwoHero = ({ darkMode }) => {
  const bgClass = darkMode ? "bg-[#0b0b5c]" : "bg-[#ffffff]";
  const textClass = darkMode ? "text-[#ffb366]" : "text-[#0b0b5c]";
  const borderClass = darkMode ? "border-t-4 border-[#ffb366]" : "border-t-4 border-[#0b0b5c]";

  return (
    <div className="relative w-full flex justify-center opacity-100 items-center pt-7 pb-7">
      <img
        src="/grid.jpg"
        alt="hero"
        className="w-full max-w-7xl h-[180px] sm:h-[250px] md:h-[400px] object-cover rounded-lg grayscale-65 object-bottom"
      />
      <span
        className={`
          absolute left-[15px] sm:left-[35px] top-[160px] sm:top-[280px]
          -translate-x-1 -translate-y-2
          ${bgClass} ${borderClass} ${textClass}
          block px-3 py-2 sm:px-4 sm:py-4 font-semibold text-center
          text-lg sm:text-2xl md:text-4xl
          rounded-lg shadow-lg w-[100%] max-w-[70%] sm:max-w-[70%]
        `}
      >
      Accepted always holds in these matters to this principle
      </span>
    </div>
  );
};

export default LargeImageTwoHero;
