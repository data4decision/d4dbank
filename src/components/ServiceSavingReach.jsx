import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceSavingReach = ({ darkMode }) => {
  const primaryBg = darkMode ? "bg-[#0b0b5c]" : "bg-[#f47b20]";
  const primarysBg = darkMode ? "bg-[#f47b20]" : "bg-[#0b0b5c]";
  const bankBg = darkMode ? "bg-gray-300" : "bg-[#ffffff]";
  const border = darkMode ? "border-[#0b0b5c]" : "border-[#f47b20]";
  const textColor = darkMode ? "text-[#0b0b5c]" : "text-[#f47b20]";
  const BtnText = darkMode ? "text-[#ffffff]" : "text-[#0b0b5c]";
  const accontBorder = darkMode ? "text-gray-300" : "text-[#ffffff]";

  // Parameters for the circular progress
  const percent = 84;
  const year = 2021;
  const title = "Income Statement";
  const subtitle = "Long established fact that a reader will distracted";
  const accent = darkMode ? "#f47b20" : "#0b0b5c"; // Accent color for the progress arc

  const size = 120;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const [currentPercent, setCurrentPercent] = useState(0); // State to handle dynamic stroke

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercent((prevPercent) => {
        if (prevPercent < percent) {
          return prevPercent + 1; // Increment until target percent
        } else {
          clearInterval(interval);
          return percent; // Stop at target
        }
      });
    }, 20); // Adjust speed by changing interval time (in ms)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [percent]);

  const dash = (currentPercent / 100) * circumference;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${primaryBg} pt-20 pb-20`}>
     <div className="flex flex-col items-center justify-center ">
      <div className="p-6 flex">
        <h1 className={`text-[25px] sm:text-[50px] md:text-[50px] font-bold ml-10 mr-10 p-3 ${BtnText}`}>
          Reach Your <br /> Savings Goal With Us
        </h1>
      </div>
      <div className="p-6">
        <div className="w-full max-w-2xl rounded-xl bg-white/90 shadow-sm p-4 sm:p-6">
          <div className="flex items-center gap-5">
            {/* Left: Circular progress with year */}
            <div className="relative">
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="rotate-[-90deg]"
              >
                {/* background track */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#F3E9E9"
                  strokeWidth={stroke}
                  fill="none"
                />
                {/* progress arc */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={accent}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  style={{ transition: 'stroke-dasharray 1s ease-out' }} // Smooth animation
                />
              </svg>

              {/* Year text */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center leading-tight">
                  <div className={`text-[13px] sm:text-[15px] md:text-[15px] ${textColor}`}>Year of</div>
                  <div className="text-sm font-semibold" style={{ color: accent }}>
                    {year}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: % + text + link */}
            <div className="flex-1">
              <div className="text-3xl font-semibold" style={{ color: accent }}>
                {currentPercent}%
              </div>
              <div className={`mt-1 text-[15px] sm:text-[20px] md:text-[20px] font-semibold ${textColor}`}>{title}</div>
              <p className={`mt-1 text-[13px] sm:text-[15px] md:text-[15px] ${textColor}`}>{subtitle}</p>

              <a
                href="#"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: accent }}
              >
                <span className="inline-flex items-center gap-2 group">
                  <span className="text-[13px] sm:text-[15px] md:text-[15px] underline decoration-transparent group-hover:decoration-current">
                    Download
                  </span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="p-6">
        <img src="/reach.jpg" alt="Savings Goal" />
      </div>
    </div>
  );
};

export default ServiceSavingReach;
