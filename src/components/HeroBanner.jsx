import React from "react";
import { FaDownload, FaApple } from "react-icons/fa";

const HeroBanner = ({ darkMode, onDownloadClick, onAppleClick }) => {
  // Color variables (same as in the original code)
  const secondBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const textColor = darkMode ? "text-[#f47b20]" : "text-[#0b0b5c]";
  const btnsHover = darkMode
    ? "hover:bg-[#f47b20] hover:scale-105 hover:shadow-lg"
    : "hover:bg-[#0b0b5c] hover:scale-105 hover:shadow-lg";

  return (
    <div className="relative w-full flex justify-center items-center bg-black bg-opacity-30">
      <img
        src="/SmartBank.png"
        alt="hero"
        className="w-full h-[250px] sm:h-[650px] md:h-[700px] object-cover opacity-40"
      />
      <div className={`absolute inset-0 flex   flex flex-col items-center sm:pt-5 pt-2 ${textColor}`}>
        <p className={`text-[15px] sm:text-[25px] md:text-[40px] font-bold ${textColor}`}>Open Your Account in 5 Mins  </p>
        <p className={`text-[13px] sm:text-[22px] md:text-[20px] w-[70%] text-center  ${textColor}`}>Imaging reaching your goals faster with the help
of our banking tools.  </p>
      </div>
      <div className="flex flex-col md:flex-col  items-center gap-5 absolute left-0 top-130 w-full h-full">
        <div>
          <p className={`text-[15px] sm:text-[22px] md:text-[20px] ${textColor}`}>
           Available for Android and IOS.
          </p>
        </div>

        <div className="flex gap-6">
          {/* Download Button */}
          <button
            onClick={onDownloadClick}
            className={`flex items-center justify-center p-4 ${primaryBg} text-white rounded-lg shadow-lg ${btnsHover} cursor-pointer`}
          >
            <FaDownload size={30} />
            <span className="ml-2">Download</span>
          </button>

          {/* Apple/Contact Button */}
          <button
            onClick={onAppleClick}
            className={`flex items-center justify-center p-4 ${secondBg} text-white rounded-lg shadow-lg ${btnsHover} cursor-pointer`}
          >
            <FaApple size={30} />
            <span className="ml-2">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;